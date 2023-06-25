import { ethers } from "ethers";
import { abi } from "./abi";

const contractAddress = "0xd1575bf719c3fce54b11217123e0a1a172ab6e0d";

const getAllCampaigns = async () => {
  try {
    console.log("Executing function");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const cryptoBoost = new ethers.Contract(contractAddress, abi, signer);
    const data = await cryptoBoost.getAllCampaigns();

    const dataString = String(data);

    const tuples = dataString.split(",");

    const objects = [];
    for (let i = 0; i < tuples.length; i += 5) {
      const address = tuples[i].trim();
      const title = tuples[i + 1].trim();
      const description = tuples[i + 2].trim();
      const amountFunded = parseInt(tuples[i + 3].trim());
      const donors = tuples[i + 4].split(",").map((item) => item.trim());

      objects.push({
        address,
        title,
        description,
        amountFunded,
        donors,
      });
    }

    const campaignData = JSON.stringify(objects);
    console.log(campaignData);
    return campaignData;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCampaigns };
