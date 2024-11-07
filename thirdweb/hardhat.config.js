require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    sepolia: {
      url: "https://1rpc.io/sepolia",
      ethNetwork: "sepolia",
      chainId: 11155111,
      zksync: true,
    },
    // zksync_testnet: {
    //   url: "https://zksync2-testnet.zksync.dev",
    //   ethNetwork: "goerli",
    //   chainId: 280,
    //   zksync: true,
    // },
    // zksync_mainnet: {
    //   url: "https://zksync2-mainnet.zksync.io/",
    //   ethNetwork: "mainnet",
    //   chainId: 324,
    //   zksync: true,
    // },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
