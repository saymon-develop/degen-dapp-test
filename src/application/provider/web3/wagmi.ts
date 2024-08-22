import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    bscTestnet,
    bsc
} from 'wagmi/chains';

export const defaultChain = bscTestnet

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    bscTestnet,
    bsc,
  ],
  ssr: true,
});