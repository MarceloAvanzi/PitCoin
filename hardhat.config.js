require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28", // Para o Lock.sol
      },
      {
        version: "0.8.20", // Para os contratos da OpenZeppelin
      },
    ],
  },
  networks: {
    // bscTestnet: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    hardhat: {
      chainId: 1337, // ID da rede local padrão
    },
    // bscMainnet: {
    //   url: "https://bsc-dataseed.binance.org/",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};
