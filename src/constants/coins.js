import * as chains from './chains';

// If you add coins for a new network, make sure Weth address (for the router you are using) is the first entry

const MINTMECoins = [
  {
    name: "MintMe",
    abbr: "MINTME",
    address: "", 
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/mintme.png",
  },
  {
    name: "DogSwap",
    abbr: "DogSwap",
    address: "0x1628160C66e0330090248a163A34Ba5B5A82D4f7",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/dogswap.png",
  },
  {
    name: "Bone",
    abbr: "BONE",
    address: "0x9D8dd79F2d4ba9E1C3820d7659A5F5D2FA1C22eF",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/bone.png",
  },
  {
    name: "1000x",
    abbr: "1000X",
    address: "0x7b535379bBAfD9cD12b35D91aDdAbF617Df902B2",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/1000x.png",
  },
  {
    name: "DirtyCash",
    abbr: "$DIRTY",
    address: "0x29a80Bf0e52C3ff636E2bc54E6F49daD22e2fA5C",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/dirty.png",
  },
  {
    name: "Peppermint",
    abbr: "PMINT",
    address: "0xe67f14Fa595947bd63546866a1FCCf27E2D58203",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/peppermint.png",
  },
  {
    name: "TRADE",
    abbr: "TRADE",
    address: "0xbe575e593d845502e1ec7211009a73d06861e324",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/trade.png",
  },
    {
    name: "XatteR",
    abbr: "XatteR",
    address: "0xB580f1dbA1c17882Fca8f6DDadA8428c9cB177fC",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/xatter.png",
  },
  {
    name: "Porncoin",
    abbr: "Porncoin",
    address: "0x488d5DBe9d9a57628428cd98645ED1dFbebF6cD4",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/porncoin.png",
  },
  {
    name: "Ranger",
    abbr: "Ranger",
    address: "0x5Fed7eb4B29e9B2E2758AC40C9ec4B4E67098192",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/ranger.png",
  },
  {
    name: "Dance And Music",
    abbr: "Dance And Music",
    address: "0x381911b21E0Cd8C3F4A57B332adCcfC0a64E26c5",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/DAM.png",
  },
  {
    name: "BANG",
    abbr: "BANG",
    address: "0xf8402c9E3218588EeEBb0CC08a01E841242bdEe0",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/bang.png",
  },
  {
    name: "Zarali",
    abbr: "Zarali",
    address: "0xa88bCa314ebe9301cBa3b4C718149b05D4AD0ea5",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/zarali.png",
  },
  {
    name: "D Club",
    abbr: "D Club",
    address: "0x7457a49688E2D7a2067694f687Ff87A3D10008B3",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/dclub.png",
  },
  {
    name: "Shells",
    abbr: "Shells",
    address: "0xaa153Ce997E1363cb31231e644c4266d9C954630",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/shells.jpeg",
  },
  {
    name: "Anukis",
    abbr: "Anukis",
    address: "0xfcC19E279D0240cFdaBdEEB6885f6829FCCfa501",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/anukis.png",
  },
  {
    name: "MintMeBull",
    abbr: "MintMe Bull",
    address: "0xd5c9BFF69210129764DEFEc86bD7e239dD2cE844",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/mintmebull.png",
  },
  {
    name: "Prunity",
    abbr: "Prunity",
    address: "0x78CF733E6e113BA393b3bd17E4738E4dd63366fb",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/prunity.png",
  },
  {
    name: "TREE",
    abbr: "TREE",
    address: "0x69a3eDdB6bE2d56E668E7DfF68DB1303e675A0F0",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/tree.jpeg",
  },
  {
    name: "bobdubbloon",
    abbr: "bobdubbloon",
    address: "0x2f9C7A6ff391d0b6D5105F8e37F2050649482c75",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/bobdub.jpeg",
  },
  {
    name: "BitMonky",
    abbr: "BitMonky",
    address: "0x3Eb5Ea03039450621500a7481525494c33d2aa0A",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/bitmonky.png",
  },
  {
    name: "Donatello",
    abbr: "Donatello",
    address: "0x4F83B8D128d745a888Aff17c332056c6455e5079",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/donatello.webp",
  },
  {
    name: "WhaleBux",
    abbr: "WhaleBux",
    address: "0x9F04568f8da1f7aB663f237cD672e408fBa4763e",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/WBUX.png",
  },
  {
    name: "MineMintToken",
    abbr: "MineMintToken",
    address: "0xA27c1AbD15bfFAAde6c2e873C10fc7a2beb72d69",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/mineminttoken.png",
  },
  {
    name: "BaTs",
    abbr: "BaTs",
    address: "0xE0358C483b65cFb60760875d11b2FA2F8421859e",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/BaTs.png",
  },
  {
    name: "VecX",
    abbr: "VecX",
    address: "0x92bB7892c9DD0cFB87701eEe940f8E69835Bdbd4",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/vecx.png",
  },
  {
    name: "SE31",
    abbr: "SE31",
    address: "0xB3eea81b9190892AA89244876059Dd6e1456EAEA",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/se31.png",
  },
  {
    name: "Toxic Snek",
    abbr: "Toxic Snek",
    address: "0xfe6fbb18a29439f744c8cb554ed9b325d013763d",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/tsnek.jpeg",
  },
  {
    name: "Pirate",
    abbr: "Pirate",
    address: "0xf85a07a0a4b94a8896001c165af59b1311af614a",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/pirate.jpg",
  },
  {
    name: "Donatello Club",
    abbr: "Donatello Club",
    address: "0x7FCB10DAD376c44e96a73f8fBAB0617C788d717C",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/donclub.png",
  },
  {
    name: "CryptoGroove",
    abbr: "CryptoGroove",
    address: "0xfa4a497d91df0e9dcaf94f5ff3a10b22e6c8fc49",
    logoUrl: "https://www.mintme.com/media/cache/avatar_large/uploads/images/432b5e98-3451-11f0-bd4c-ac162db679ce.png",
  },{
    name: "FIXERCOIN",
    abbr: "FIXERCOIN",
    address: "0x091da08c5BF888252ed1ab3E44246cBf72D63307",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/fixer.png",
  },
  {
    name: "ULTRA-9",
    abbr: "ULTRA-9",
    address: "0xb5de1ee82f95583236468750977daf932979d70f",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/ultra.png",
  },
  {
    name: "BOUNTY",
    abbr: "BOUNTY",
    address: "0xA08D7bc9CD6fCF0Bb80c993c61cAeF02e3E61FC0",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/bounty.png",
  },
  {
    name: "MintMoXMR",
    abbr: "MintMoXMR",
    address: "0x3AD09254A2406B6CDf2b184479EaC284E99A72D3",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/mintmoxmr.png",
  },
  {
    name: "10K Litoshi",
    abbr: "10K Litoshi",
    address: "0x02d0E745f6A5BCC5216E63E12249e08514CcFfE4",
    logoUrl: "https://dog-swaplatest.vercel.app/images/coins/10klitoshi.png",
  },
]

const COINS = new Map();
COINS.set(chains.ChainId.MINTME, MINTMECoins);
export default COINS
