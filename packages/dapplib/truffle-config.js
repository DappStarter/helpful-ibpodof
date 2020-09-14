require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth pitch evoke hunt casino sunset gas'; 
let testAccounts = [
"0x1c9f2c2721c97d6094e96c44d7d731c4e4e1328832d7bbf63e1b18d0153105f5",
"0xae8c2a711a2cfb9dcb5b65b0a99c3e66ba1da3c8625c965c8b3897406b846f07",
"0x05a56a92d0405b7f1597afe88b051821cf0fe2d1dd6d8a2145fd09aaa60f4be2",
"0x6ab203297bce17e113ba6ef80c403c4d258e48fd00cb24879403774ff68ba3a1",
"0xec1b7dfe812be89b215d28aa51b2604627d39d04ebc1062cdf543fbbcb66f30a",
"0x6e000da868f11fa4e6e8f393299c1e8484febbefc2f8642d504a179de44cbbd3",
"0x0da225f58caa7cae535ac6039dac95456356400afbcbea29634f5b1187b6620f",
"0x2f9791654ac89f3ae46c36e98d84e25709fa26dd2c9b395b0d003aeefb57a4ce",
"0x02a498fdfc7d94b9b9b9b8aaaa021277aca37cfe994d21d0410a987e69fcbc87",
"0xf6af84829b594020150ad68f1495a21b1c4bee9b2079c3d90bffa8ff41092ce2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
