"use client";
import { useState, useEffect } from "react";
import { checkAndAddHederaNetwork } from "@/utils/HederaNetwork";

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      if (!isConnected) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          // Let the user select the account
          const selectedAccount = await ethereum.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }],
          });

          if (selectedAccount.length > 0) {
            setAccount(selectedAccount[0]);
            setIsConnected(true);
            console.log(`Selected Account: ${selectedAccount[0]}`);
          }
        }
      } else {
        disconnectWallet();
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
  };

  useEffect(() => {
    const loadWalletConnection = () => {
      const connectedStatus = localStorage.getItem("isConnected");

      if (connectedStatus === "true") {
        setIsConnected(true);
        const connectedAccount = localStorage.getItem("account");
        setAccount(connectedAccount);
      }
    };

    loadWalletConnection();
    checkAndAddHederaNetwork();
  }, []);

  return (
    <ul class="md:flex items-center hidden space-x-3 lg:flex">
      <button
        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-pink-600 focus:shadow-outline focus:outline-none"
        onClick={connectWallet}
      >
        {isConnected ? "Connected" : "Connect Wallet"}
      </button>
    </ul>
  );
};

export { ConnectWalletButton };
