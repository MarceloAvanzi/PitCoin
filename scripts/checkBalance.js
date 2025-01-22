const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const balance = await deployer.getBalance();
  console.log(`Deployer address: ${deployer.address}`);
  console.log(`Deployer balance: ${ethers.utils.formatEther(balance)} BNB`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
