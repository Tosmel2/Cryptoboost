import { ethers } from "ethers";
import { abi } from "./abi";

const contractAddress = "0xaca756fe5cb502b741b998a9803a2b8118458d0d";

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
    return `Error: ${error.message}`;
  }
};

export { createCampaign };
