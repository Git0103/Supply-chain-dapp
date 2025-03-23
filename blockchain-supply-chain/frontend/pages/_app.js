import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../utils/wagmiConfig";
import { Web3AuthProvider } from "../context/Web3AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <Web3AuthProvider>
        <Component {...pageProps} />
      </Web3AuthProvider>
    </WagmiProvider>
  );
}

export default MyApp;
