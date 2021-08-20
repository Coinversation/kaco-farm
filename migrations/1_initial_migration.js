const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  let isOverWrite = {gas: 3000000,overwrite: false};

  deployer.deploy(Migrations, isOverWrite);
};
