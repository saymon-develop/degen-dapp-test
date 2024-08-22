import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { bsc, bscTestnet } from "wagmi/chains"

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [bscTestnet, bsc],
  ssr: true,
})
