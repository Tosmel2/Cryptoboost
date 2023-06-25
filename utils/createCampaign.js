import { ethers } from "ethers";
import { abi } from "./abi";

const contractAddress = "0x45989d3583f0ac991753bacda42dbc4f46eb3f2b";

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
