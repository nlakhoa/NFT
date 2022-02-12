const ZombieFactory = artifacts.require("ZombieFactory");
const DappToken = artifacts.require("DappToken");
const StechToken = artifacts.require("StechToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function (deployer, network, accounts) {
  // Deploy ZombieContract
  await deployer.deploy(ZombieFactory);
  await ZombieFactory.deployed();

  // Deploy Stech Token
  await deployer.deploy(StechToken);
  const stechToken = await StechToken.deployed();

  // Deploy Dapp Token
  await deployer.deploy(DappToken);
  const dappToken = await DappToken.deployed();

  // Deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, stechToken.address);
  const tokenFarm = await TokenFarm.deployed();

  // Transfer all tokens to TokenFarm (1 million)
  await dappToken.transfer(tokenFarm.address, "1000000000000000000000000");

  // Transfer 100 Stech tokens to investor
  await stechToken.transfer(accounts[1], "1000000000000000000000000");
};
