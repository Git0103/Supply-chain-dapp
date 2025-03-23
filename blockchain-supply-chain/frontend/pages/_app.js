import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../utils/wagmiConfig";
import { ConnectKitProvider } from "connectkit";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;
