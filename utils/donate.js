import { ethers } from "ethers";
import { abi } from "./abi";
const contractAddress = "0xd1575bf719c3fce54b11217123e0a1a172ab6e0d";

const donate = async ({ campaignId, amount }) => {
  console.log(`Executing function`);
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const cryptoBoost = new ethers.Contract(contractAddress, abi, signer);
    const donationAmount = ethers.utils.parseUnits(amount.toString(), 0);
    const fund = await cryptoBoost.donate(campaignId, donationAmount);
    return "Thanks for your donation";
  } catch (error) {
    console.log(error);
    return "This transaction was unsuccessful";
  }
};

export { donate };
