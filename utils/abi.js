export const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "campaignCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_donor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "donatedTo",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "campaigns",
    "outputs": [
      {
        "internalType": "address",
        "name": "campaignOwner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "campaignTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "campaignDescription",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amountRealised",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_campaignTitle",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_campaignDescription",
        "type": "string"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campaignId",
        "type": "uint256"
      }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCampaigns",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "campaignOwner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "campaignTitle",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "campaignDescription",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amountRealised",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "campaignDonors",
            "type": "address[]"
          }
        ],
        "internalType": "struct CryptoBoost.Campaign[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllDonors",
    "outputs": [
      {
        "internalType": "address[][]",
        "name": "",
        "type": "address[][]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campaignId",
        "type": "uint256"
      }
    ],
    "name": "getDonorsOfCampaign",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_campaignId",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]