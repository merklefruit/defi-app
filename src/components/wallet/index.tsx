import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import config from "config";
import React from "react";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.REACT_APP_ALCHEMY_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: config.appName,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const theme: Theme = darkTheme({
  borderRadius: "medium",
  fontStack: "system",
});

theme.colors.connectButtonBackground = "transparent";
theme.shadows.connectButton = "none";

const appInfo = {
  appName: config.appName,
};

const Provider = ({ children }: { children: React.ReactNode }) => (
  <RainbowKitProvider
    chains={chains}
    theme={theme}
    appInfo={appInfo}
    showRecentTransactions={true}
  >
    {children}
  </RainbowKitProvider>
);

const Wallet = { Provider, wagmiClient, chains, theme };
export default Wallet;
