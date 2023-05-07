// require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
    
  },

  networks: {
    mainnet: {
      url: process.env.RPC_MAINNET,
      gasPrice: 160000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: 'https://polygon.llamarpc.com',
      gasPrice: 300000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.PRIVATE_KEY],
    },
    polygonTestnet: {
      url: 'https://polygon-mumbai.blockpi.network/v1/rpc/public',
      accounts: [process.env.PRIVATE_KEY],
    },

  },

  etherscan: {
    apiKey: {
      mainnet: process.env.API_KEY_ETHEREUM,
    },
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

