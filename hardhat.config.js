import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
require("dotenv").config();

module.exports = {
  zksolc: {
    version: "1.3.8",
    compilerSource: "binary",
    settings: {},
  },
  // defaultNetwork: "zkSyncTestnet",

  networks: {
    goerli: {
      accounts: [process.env.PRIVATE_KEY],
      url: "https://goerli.blockpi.network/v1/rpc/public" // URL of the Ethereum Web3 RPC (optional)
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "https://goerli.blockpi.network/v1/rpc/public", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
      chainId: 280,
      accounts: [process.env.PRIVATE_KEY],
      // Verification endpoint for Goerli
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
    },
    zkSyncMainnet: {
      url: "",
      zksync: true,
      accounts: [process.env.PRIVATE_KEY],
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
    },
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygonTestnet: {
      url: process.env.POLYGON_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    barnacle: {
      url: process.env.BARNACLE_RPC_URL,
      chainId: 1281,
      accounts: [process.env.PRIVATE_KEY]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 6000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://eth.llamarpc.com",
      chainId: 1,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API,
      bscTestnet: process.env.BSCSCAN_API,
      polygonMumbai: process.env.POLYGON_API,
      mainnet: "2UR784WKFTQUCUFC99ZCCNJBKM4YGQBTQN",
      bsc: process.env.BSCSCAN_API
    },
  },
  solidity: {
    compilers: [{
      version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      },
      allowUnlimitedContractSize: true
    }],
  },
};
