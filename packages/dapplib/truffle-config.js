require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember protect grid problem bubble symptom'; 
let testAccounts = [
"0x77c167784b39f3747cac0b45ffdff278e994928f89cf8c1219b94f9b85e88a3d",
"0xf3a39512aaf16a70af7312dbd4f5a07a7db8c8b24520298d7133a82e478183c4",
"0x87b61d3ef0fe8b01173eebeb1c76aab99624a4050416669ae715d82ff1e90f9d",
"0x63da13e233256d5cc5c8eeecc2c4fb3ca70761877f2e46820e89aae401818206",
"0xafd3259f6318f58aeacb094213b72dc08bead772d1e318f3ab2d3863e7304598",
"0x544adec35061e9ee074ebcc30a17d698f1e3744a72c4548d6fecbc4f32de4ea5",
"0x00d8a999db51ee9d3431a8092427c661e4ba10e5f0a92cbf596f2c4315931870",
"0xc5012fc0900aa045cd446492e7836306325c7ca98081ac3763132884fdbafa28",
"0xfc4171d5d736016ffafb18df4dcec2a079d7eae19baee86d3c6e472f361204d8",
"0xb010eeda5e32b5ed0c97ba2fd3eef4e3babf1b6e50847de62933a9c7a1959830"
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
            version: '^0.8.0'
        }
    }
};

