module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  console.log("-----------------------")
  console.log("Deploy OfferFactory")
  console.log("-----------------------")
  console.log("deployer: %s", deployer);

  const feeData = await ethers.provider.getFeeData();

  const { address } = await deploy("OfferFactory", {
    contract: "OfferFactory",
    from: deployer,
    args: [],
    log: true,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas
  });
};

module.exports.tags = ["OfferFactory"];