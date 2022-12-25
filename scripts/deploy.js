// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main(){

  //deploys new contracts 
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  //10 is max amount of white list adddys deployed 
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  //wait for contract to get deployed
  await deployedWhitelistContract.deployed();

  console.log("Whitelist contract address:", deployedWhitelistContract.address);
}
//calling the main function 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });