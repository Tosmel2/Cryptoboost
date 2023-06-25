import { useState, useEffect } from "react";
import { checkAndAddHederaNetwork } from "@/utils/HederaNetwork";

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      if (isConnected) {
        disconnectWallet();
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          console.log(`Selected Account: ${accounts[0]}`);
        }
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount("");
  };

  useEffect(() => {
    const loadWalletConnect = async () => {
      try {
        const accounts = await ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          console.log(`Selected Account: ${accounts[0]}`);
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    loadWalletConnect();
    checkAndAddHederaNetwork();
  }, []);

  const renderWalletAddress = () => {
    if (isConnected && typeof account === "string") {
      const firstSixDigits = account.substring(0, 6);
      const lastSixDigits = account.substring(account.length - 6);
      return <span>{`${firstSixDigits}...${lastSixDigits}`}</span>;
    }
    return null;
  };

  return (
    <ul className="md:flex items-center hidden space-x-3 lg:flex">
      <button
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-pink-600 focus:shadow-outline focus:outline-none"
        onClick={connectWallet}
      >
        {isConnected ? renderWalletAddress() : "Connect Wallet"}
      </button>
    </ul>
  );
};

export { ConnectWalletButton };
