import abi from "./JSON/BuyMeACoffee.json";
import { ethers } from "ethers";
import "./App.css";
import React, { useEffect, useState } from "react";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./chai.png";
function App() {
  // Contract Address & ABI

  // Component state
  const [currentAccount, setCurrentAccount] = useState("not connected");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  // const setListener=(provider)=>{
  //   provider.on("accountsChanged",_=>window.location.reload())
  // }

  // Detect change in Metamask account
  // useEffect(() => {
  //   if (window.ethereum) {
  //     window.ethereum.on("chainChanged", () => {

  //       window.location.reload();
  //     });
  //     window.ethereum.on("accountsChanged", () => {
  //       window.location.reload();
  //     });
  //   }
  // });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x99B9Ccccb1C0f4fcC115C20807e0aaE09aab4f30";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum, "any");
          // setListener(provider)
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setCurrentAccount(accounts[0]);
          setState({ provider, signer, contract });
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <div style={{ backgroundColor: "#EFEFEF" }}>
      <img src={chai} class="img-fluid" alt="..." width="100%" />
      <p>Account - {currentAccount}</p>
      <div className="container">
        <Buy state={state} account={currentAccount} />
        <Memos state={state} />
      </div>
    </div>
  );
}
export default App;
//disable the button when not in use - done

//no metamask
