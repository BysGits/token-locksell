// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const fs = require("fs");
const { parseEther } = require("ethers/lib/utils");
require("dotenv").config();


async function main() {
  [deployer] = await ethers.getSigners();

  console.log(`Account: ${deployer.address}`);
  console.log(`Balance: ${(await deployer.getBalance()).toString()}`);


  const Token = await ethers.getContractFactory("WMATIC");
  const token = await Token.attach("0x5B67676a984807a212b1c59eBFc9B3568a474F0a");
  await token.deployed()

  const tx = await token.deposit({value: parseEther("2").toString()});
  await tx.wait()

  console.log("Done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
