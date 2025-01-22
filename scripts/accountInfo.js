const hre = require("hardhat");

async function main() {
  // Replace this with the actual contract address from your deployment logs
  const pitCoinAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Deployed contract address

  // Get the contract factory and attach to the deployed contract
  const PitCoin = await hre.ethers.getContractFactory("PitCoin");
  const pitCoin = PitCoin.attach(pitCoinAddress);

  // Check total supply
  const totalSupply = await pitCoin.totalSupply();
  console.log("Total Supply:", totalSupply.toString());

  // Check balance of deployer
  const [deployer] = await hre.ethers.getSigners();
  const balance = await pitCoin.balanceOf(deployer.address);
  console.log("Deployer Balance:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
