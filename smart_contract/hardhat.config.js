require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/kK0KVYSpJjhDCNWXa82qgi6lIWmeP-qv',
      accounts: ['49f722b6735e63bba59f35739ecc4144ec2fe625191a6266535ca20d7bb32586'],
    },
  },
};