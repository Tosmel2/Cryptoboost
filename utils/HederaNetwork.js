const network = "testnet";
const hederaChainId =
  network === "testnet"
    ? "0x128"
    : network === "previewnet"
    ? "0x129"
    : "0x127";

const checkAndAddHederaNetwork = async () => {
  console.log("Connecting, please wait");

  try {
    const chainId = await ethereum.request({ method: "eth_chainId" });

    if (chainId === hederaChainId) {
      console.log(`Hedera ${network} network already exists`);
    } else {
      console.log(`Switching to the Hedera ${network} network`);

      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainName: `Hedera ${network}`,
            chainId: hederaChainId,
            nativeCurrency: { name: "HBAR", symbol: "hh", decimals: 18 },
            rpcUrls: [`https://${network}.hashio.io/api`],
            blockExplorerUrls: [`https://hashscan.io/${network}`],
          },
        ],
      });

      console.log(`Hedera ${network} network added`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export { checkAndAddHederaNetwork };
