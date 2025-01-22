const hre = require("hardhat");

async function main() {
  await hre.run('compile');
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const PitCoin = await hre.ethers.getContractFactory("PitCoin");
  const pitcoin = await PitCoin.deploy();

  await pitcoin.deployed();

  console.log("PitCoin deployed to:", pitcoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
