import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ConnectKitButton } from "connectkit";

export default function Login() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Web3 Login</h1>
      {isConnected ? (
        <div>
          <p>Connected: {address}</p>
          <button
            className="mt-4 bg-red-600 px-4 py-2 rounded"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <ConnectKitButton />
      )}
    </div>
  );
}
