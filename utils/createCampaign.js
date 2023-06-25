import { ethers } from "ethers";
import { abi } from "./abi";

const contractAddress = "0xd1575bf719c3fce54b11217123e0a1a172ab6e0d";

const createCampaign = async ({ campaignTitle, campaignDescription }) => {
  try {
    console.log("Executing Function");
    const title = campaignTitle.toLowerCase();
    const description = campaignDescription.toLowerCase();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const cryptoBoost = new ethers.Contract(contractAddress, abi, signer);

    const campaign = await cryptoBoost.createCampaign(title, description);
    return "Campaign created successfully!";
  } catch (error) {
    return `This Transaction failed`;
  }
};

export { createCampaign };
