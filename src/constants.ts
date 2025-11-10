export const VERSION = '0.7.2';

export const SUPPORTED_VERIFIERS = ['etherscan', 'sourcify'];

export const SOURCIFY_API_URL = 'https://sourcify.dev/server/';

const ETHERSCAN_CHAIN_IDS = new Set([
  1,
  5,
  10,
  25,
  56,
  97,
  100,
  128,
  137,
  199,
  204,
  250,
  256,
  338,
  420,
  1024,
  1029,
  1101,
  1284,
  1285,
  1287,
  1442,
  4002,
  5611,
  8453,
  42161,
  42170,
  42220,
  43113,
  43114,
  44787,
  80001,
  84531,
  84532,
  421613,
  534351,
  534352,
  11155111,
  11155420,
  1313161554,
  1313161555,
]);

export const getApiUrl = (chainId: number): string | undefined =>
  ETHERSCAN_CHAIN_IDS.has(chainId) ? 'https://api.etherscan.io/v2/api' : undefined;

export const EXPLORER_URLS: { [chainId: number]: string | undefined } = {
  1: 'https://etherscan.io/address',
  5: 'https://goerli.etherscan.io/address',
  10: 'https://optimistic.etherscan.io/address',
  25: 'https://cronoscan.com/address',
  56: 'https://bscscan.com/address',
  69: 'https://kovan-optimistic.etherscan.io/address',
  97: 'https://testnet.bscscan.com/address',
  100: 'https://gnosisscan.io/address',
  128: 'https://hecoinfo.com/address',
  137: 'https://polygonscan.com/address',
  199: 'https://bttcscan.com/address',
  204: 'https://opbnb.bscscan.com/address',
  250: 'https://ftmscan.com/address',
  256: 'https://testnet.hecoinfo.com/address',
  338: 'https://testnet.cronoscan.com/address',
  420: 'https://goerli-optimistic.etherscan.io/address',
  1024: 'https://clvscan.com/address',
  1029: 'https://testnet.bttcscan.com/address',
  1101: 'https://zkevm.polygonscan.com/address',
  1284: 'https://moonbeam.moonscan.io/address',
  1285: 'https://moonriver.moonscan.io/address',
  1287: 'https://moonbase.moonscan.io/address',
  1442: 'https://testnet-zkevm.polygonscan.com/address',
  4002: 'https://testnet.ftmscan.com/address',
  5611: 'https://opbnb-testnet.bscscan.com/address',
  8453: 'https://basescan.org/address',
  42161: 'https://arbiscan.io/address',
  42170: 'https://nova.arbiscan.io/address',
  42220: 'https://celoscan.io/address',
  43113: 'https://testnet.snowtrace.io/address',
  43114: 'https://snowtrace.io/address',
  44787: 'https://alfajores.celoscan.io/address',
  80001: 'https://mumbai.polygonscan.com/address',
  84531: 'https://goerli.basescan.org/address',
  84532: 'https://sepolia.basescan.org/address',
  421613: 'https://goerli.arbiscan.io/address',
  534351: 'https://sepolia.scrollscan.com/address',
  534352: 'https://scrollscan.com/address',
  11155111: 'https://sepolia.etherscan.io/address',
  11155420: 'https://sepolia-optimism.etherscan.io/address',
  1313161554: 'https://aurorascan.dev/address',
  1313161555: 'https://testnet.aurorascan.dev/address',
};

export const RequestStatus = {
  OK: '1',
  NOTOK: '0',
};

export enum VerificationStatus {
  FAILED = 'Fail - Unable to verify',
  SUCCESS = 'Pass - Verified',
  PARTIAL = 'Pass - Partially Verified (with a metadata mismatch)',
  PENDING = 'Pending in queue',
  ALREADY_VERIFIED = 'Contract source code already verified',
  AUTOMATICALLY_VERIFIED = 'Already Verified',
}

export const StorageSlot = {
  LOGIC: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc',
  BEACON: '0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50',
};

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const INDENT_SIZE = 3;
export const INDENT = ' '.repeat(INDENT_SIZE);
