const { assert } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber, constants } = ethers;

describe("Cycle", () => {
  let deployerAddress = "";
  let contract;
  let callData;

  before(async () => {
    const Contract = await ethers.getContractFactory("Cycle");
    contract = await Contract.deploy();
    await contract.deployed();
    console.log(`    Cycle contract address:`, contract.address);
  });

  it("Running out to get max cycles", async (t) => {
    // write method
    // const tx = await contract.populateTransaction.runOut();
    // tx.gasLimit = "0x1C9C380"; //30m
    // const txRes = await contract.signer.sendTransaction(tx);
    // console.log(txRes);
    // await txRes.wait();
    
    // read method
    // console.log(
    //   "    loop count:",
    //   (await contract.callStatic.runOut()).toString()
    // );
    t.pass();
  });
});
