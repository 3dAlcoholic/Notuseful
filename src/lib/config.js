
export const DAPP_URL = "http://kilobyte.farm";
export const DAPP_TITLE = "Fuk My Life";

export const networkChainId = 369;

export const MASTERCHEF_ADDRESS = "0x24321b16e1AF2FEC2EA8543091257BcbB5873BC7";
export const NATIVE_TOKEN_ADDRESS = "0xA1077a294dDE1B09bB078844df40758a5D0f9a27"; //WPLS
export const FARM_TOKEN_ADDRESS = "0xC6B28B2E3Bf9fF26299D540a4D654F7ade4dFdB0"; //KB
export const STABLECOIN_ADDRESS = "0xefD766cCb38EaF1dfd701853BFCe31359239F305"; //DAI
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEAD_ADDRESS = "0x0000000000000000000000000000000000000369";
export const ZAPPER_ADDRESS = "0xe8ce638E1b97CaBF029B8D6dff8744a0A8275FeB";

//PulseX V1
export let PULSEX_V1_FACTORY_ADDRESS = "0x1715a3E4A142d8b698131108995174F37aEBA10D";
export let PULSEX_V1_ROUTER_ADDRESS = "0x98bf93ebf5c380C0e6Ae8e192A7e2AE08edAcc02";

//PulseX V2
export let PULSEX_V2_FACTORY_ADDRESS = "0x29ea7545def87022badc76323f373ea1e707c523";
export let PULSEX_V2_ROUTER_ADDRESS = "0x165C3410fC91EF562C50559f7d2289fEbed552d9";

//DEXTOP


export const Oracles = {
    PULSEX_V1: 0,
    PULSEX_V2: 1,
    
}

export const Types = {
    Pool: 0,
    Farm: 1
}

export const DepositTypes = {
    TOKEN: 0,
    PLS: 1
}


export let farms = [
    {
        orderById: 1,
        displayName: 'KB/PLS',
        lpAbbreviation: 'LP',
        poolId: 0,
        stakingToken: '0x4db7c5A1DA37f1681459D247aD353C8b4D1F64b7',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 0,
        withdrawFee: 0,
        poolWeight: 15,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },

    {
        orderById: 2,
        displayName: 'KB/DEX',
        lpAbbreviation: 'LP',
        poolId: 1,
        stakingToken: '0x1c69F07efb55281EcA5490b1D7412486048547Fc',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 0,
        withdrawFee: 0,
        poolWeight: 5,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },

    {
        orderById: 2,
        displayName: 'DEX/PLS',
        lpAbbreviation: 'LP',
        poolId: 4,
        stakingToken: '0x635969e2c12aB4938f9B31BF69aCA724DF1F2c42',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 0,
        withdrawFee: 0,
        poolWeight: 5,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },

    {
        orderById: 3,
        displayName: 'DAI/PLS',
        lpAbbreviation: 'LP',
        poolId: 2,
        stakingToken: '0xBDEb3316d6E09BB85ac4290ed193fe1AF59c1328',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },

    {
        orderById: 4,
        displayName: 'PLSX/PLS',
        lpAbbreviation: 'LP',
        poolId: 3,
        stakingToken: '0xEa1457a682eBB5471E75F83f5348743DF918A6c3',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },

    {
        orderById: 5,
        displayName: 'IMPLS/PLS',
        lpAbbreviation: 'LP',
        poolId: 5,
        stakingToken: '0x216Ff37198DAF7eb397E412D0d6397DFD3A7Aba3',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },
    
    {
        orderById: 6,
        displayName: 'WETH/PLS',
        lpAbbreviation: 'LP',
        poolId: 10,
        stakingToken: '0x17fBf3ba041c67d378A3F3fb981D1Dc585396a01',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },
    
    {
        orderById: 7,
        displayName: 'HEX/PLS',
        lpAbbreviation: 'LP',
        poolId: 11,
        stakingToken: '0xED4Ffe49946d0c8ce601Dc5169Aa978c12215a7A',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 1,
        withdrawFee: 1,
        poolWeight: 1,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Farm,
        oracle: Oracles.DEXTOP
    },
    
    {
        orderById: 2,
        displayName: 'DEX',
        lpAbbreviation: 'DEX',
        poolId: 9,
        stakingToken: '0x57953dAC106a4cDa11D90273b1B9D59E169533c0',
        liquidityLink: 'https://dex.dextop.pro/add/',
        depositFee: 0,
        withdrawFee: 0,
        poolWeight: 2,
        isActive: true,
        compound: false,
        zaps: false,
        type: Types.Pool,
        oracle: Oracles.DEXTOP
    }
]