import { useContext } from "react";
import { Web3AuthContext } from "../context/Web3AuthContext";

export default function Login() {
  const { user, connect, disconnect } = useContext(Web3AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Web3 Login</h1>
      {user ? (
        <div>
          <p>Connected as: {user.walletAddress}</p>
          <button className="mt-4 bg-red-600 px-4 py-2 rounded" onClick={disconnect}>
            Disconnect
          </button>
        </div>
      ) : (
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded" onClick={connect}>
          Connect with MetaMask
        </button>
      )}
    </div>
  );
}
