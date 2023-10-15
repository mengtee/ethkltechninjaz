import '../styles/globals.css';
import "@rainbow-me/rainbowkit/styles.css";

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public'
import { sepolia } from "viem/chains";

// Configure chains & providers
const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()],
)

// Set up wagmi config
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


// Pass config to React Context Provider
export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains = {chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

