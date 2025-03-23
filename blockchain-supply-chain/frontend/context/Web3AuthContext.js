import { createContext, useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const Web3AuthContext = createContext();

export const Web3AuthProvider = ({ children }) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isConnected) {
      setUser({ walletAddress: address });
    } else {
      setUser(null);
    }
  }, [isConnected, address]);

  return (
    <Web3AuthContext.Provider value={{ user, connect, disconnect }}>
      {children}
    </Web3AuthContext.Provider>
  );
};
