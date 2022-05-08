// https://eth-ropsten.alchemyapi.io/v2/Ao2LyRGhWVMXuPDdNZuOYpP-nMsGyyIg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Ao2LyRGhWVMXuPDdNZuOYpP-nMsGyyIg',
      accounts: ['2b930f813dc68dc4ee12790e04a0db725a75d49a8c6ddb593f8bbd3ce06c2d0d']
    }
  }
}