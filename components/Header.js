import dynamic from "next/dynamic";
import { useState } from "react";
import { ethers } from "ethers";

const Header = () => {
  const [isConnected, setIsConnect] = useState(false);
  const [provider, setProvider] = useState();
  
  async function connect(){
    if (typeof window.ethereum !== "undefined"){
      try{
        await ethereum.request({method: "eth_requestAccounts"});
        setIsConnect(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setProvider(connectedProvider);
      } catch (e){
        console.log(e);
      }
    } else{
      setIsConnect(false);
    }
  }

  return (
    <div className="hidden lg:flex lg:gap-x-12 justify-between w-full">
      <div className="flex gap-x-12">
        <a href="./" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
        <a href="./dataset" className="text-sm font-semibold leading-6 text-gray-900">Dataset Marketplace</a>
        <a href="./dashboard" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
      </div>
      <div>
        <a className="text-sm font-semibold leading-6 text-gray-900">
          {isConnected ? 
            <button 
              className="bg-purple-300 text-white px-4 py-2 rounded"
            >
              Connected!
            </button>
            : 
            <button 
              onClick={() => connect()}
              className="bg-purple-900 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              Connect
            </button>}
        </a>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
