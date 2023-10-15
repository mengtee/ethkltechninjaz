import dynamic from "next/dynamic";
import { useState } from "react";
import { ethers } from "ethers";
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';
import { abi } from 'pages/contract-abi.js';
import { useIsMounted } from 'pages/hooks/useIsMounted.js';
import { ConnectButton } from '@rainbow-me/rainbowkit'


const Header = () => {

  // Initial connect
  // const [isConnected, setIsConnect] = useState(false);
  // const [provider, setProvider] = useState();
  
  // async function connect(){
  //   if (typeof window.ethereum !== "undefined"){
  //     try{
  //       await ethereum.request({method: "eth_requestAccounts"});
  //       setIsConnect(true);
  //       let connectedProvider = new ethers.providers.Web3Provider(
  //         window.ethereum
  //       );
  //       setProvider(connectedProvider);
  //     } catch (e){
  //       console.log(e);
  //     }
  //   } else{
  //     setIsConnect(false);
  //   }
  // }

  const mounted = useIsMounted();
  const { isConnected } = useAccount();

  const { data:mintData, write: mint, isLoading: isMintLoading, isSuccess: isMintStarted } = useContractWrite({
    address: "0x76E1eA6f53743c6AEF5a524bdDd03385f15B9bE4",
    abi: abi,
    functionName: 'mint'
  })

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash
  })

  const isMinted = txSuccess;

  return (
    <div className="grid lg:grid-cols-2 hidden lg:flex lg:gap-x-12 justify-between w-full">
      <div className="mt-5 flex gap-x-12">
        <a href="./" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
        <a href="./dataset" className="text-sm font-semibold leading-6 text-gray-900">Dataset Marketplace</a>
        <a href="./dashboard" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
      </div>
      <div>
          <ConnectButton />
          {mounted && isConnected && !isMinted && (
            <button
              style={{ marginTop: 24 }}
              disabled={!mint || isMintLoading || isMintStarted}
              className="button"
              data-mint-loading={isMintLoading}
              data-mint-started={isMintStarted}
              onClick={() => mint?.()}
            >
              {isMintLoading && 'Waiting for approval'}
              {isMintStarted && 'Minting...'}
              {!isMintLoading && !isMintStarted && 'Mint'}
            </button>
          )}
          {isMinted && (
            <button
              style={{ marginTop: 24 }}
              className="button"
            >
              Minted
            </button>
          )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
