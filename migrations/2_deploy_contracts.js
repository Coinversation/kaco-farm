const KacoToken = artifacts.require("KacoToken");
const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");
const Timelock = artifacts.require("Timelock");

// const CakeToken = artifacts.require("CakeToken");

module.exports = async function(deployer) {
    // await deployer.deploy(CakeToken, 11437233, 23533233);
    // console.log("CakeToken deploy complete.")
    // const kaco = await CakeToken.deployed();
    // const totalSupply = await kaco.totalSupply();
    // console.log("kaco totalSupply: " + totalSupply);
    // const cap = await kaco.cap();
    // console.log("kaco cap: " + cap);


    let isOverWrite = {gas: 3000000,overwrite: false};

    await deployer.deploy(KacoToken, 10186319, 22282319, isOverWrite);
    console.log("kaco deploy complete.")
    const kaco = await KacoToken.deployed();
    const totalSupply = await kaco.totalSupply();
    console.log("kaco totalSupply: " + totalSupply);
    const cap = await kaco.cap();
    console.log("kaco cap: " + cap);


    await deployer.deploy(SyrupBar, kaco.address, isOverWrite);
    console.log("syrup deploy complete.")
    const syrup = await SyrupBar.deployed();
    const syrupTotalSupply = await syrup.totalSupply();
    console.log("syrup totalSupply: " + syrupTotalSupply);


    await deployer.deploy(MasterChef, kaco.address, syrup.address, "1500000000000000000", 10186319, isOverWrite);
    console.log("MasterChef deploy complete.")
    const masterChef = await MasterChef.deployed();
    const chefLength = await masterChef.poolLength();
    console.log("masterChef poolLength: " + chefLength);


    await deployer.deploy(Timelock, "0xFB83a67784F110dC658B19515308A7a95c2bA33A", 86400, isOverWrite);
    console.log("Timelock deploy complete.")
    const timelock = await Timelock.deployed();
    const admin = await timelock.admin();
    console.log("Timelock admin: " + admin);
};
