import { createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultConfig } from "connectkit";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

export const wagmiConfig = createConfig(
  getDefaultConfig({
    autoConnect: true,
    publicClient,
  })
);
