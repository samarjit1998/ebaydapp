var EcommerceProduct = artifacts.require('./EcommerceProduct.sol')
//const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(EcommerceProduct)
//deployer.link(ConvertLib, MetaCoin);
//deployer.deploy(MetaCoin);
};
