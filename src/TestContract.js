import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { DappTokenAbi, StechToken, FarmToken } from "./abi";
import MySVG from './SVG.jsx';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import detectEthereumProvider from "@metamask/detect-provider";

export default function TestContract() {
  const statusMenu = useSelector((state) => state.home.statusMenu);
  console.log(statusMenu === statusMenu);
  const [status, setStatus] = useState(statusMenu);
  const [stechToken, setStechToken] = useState("");
  const [stechTokenBalance, setStechTokenBalance] = useState("");
  const [dappToken, setDappToken] = useState("");
  const [dappTokenBalance, setDappTokenBalance] = useState("");
  const [web3, setWeb3] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const provider = await detectEthereumProvider();
      let web3 = new Web3(provider);
      // const balances = web3.eth.getAllERC20({from:"0x9805D7B954265b59D126FBf6BC1B3Af1E946Ac91"}).call()
      //  console.log(web3, contract,balances)
      setWeb3(web3);
    }
    return fetchData();
  }, []);
  const [tokenFarm, setTokenFarm] = useState("");
  const [tokenFarmBalance, setTokenFarmBalance] = useState("");

  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const account = useSelector((state) => state.wallet.account);
  const MenuIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      className={props.class}
    ></svg>
  );
  useEffect(() => {
    async function fetchData() {
      console.log(account, web3);
      const stechToken = await new web3.eth.Contract(
        StechToken,
        "0x8f63CBC8e501a9b125aC3b47De5C29430d71a75a"
      );
      setStechToken(stechToken);

      let stechTokenBalance = await stechToken.methods
        .balanceOf(account)
        .call();
      setStechTokenBalance(stechTokenBalance.toString());

      const dappToken = await new web3.eth.Contract(
        DappTokenAbi,
        "0xf8e81D47203A594245E36C48e151709F0C19fBe8"
      );
      setDappToken(dappToken);
      let dappTokenBalance = await dappToken.methods.balanceOf(account).call();
      setDappTokenBalance(dappTokenBalance.toString());

      const tokenFarm = await new web3.eth.Contract(
        FarmToken,
        "0x8f63CBC8e501a9b125aC3b47De5C29430d71a75a",
        account
      );
      setTokenFarm(tokenFarm);
      let stakingBalance = await tokenFarm.methods
        .stakingBalance(account)
        .call();
      setTokenFarmBalance(stakingBalance.toString());
      console.log(
        stakingBalance,
        dappTokenBalance,
        stechTokenBalance,
        "co chay"
      );
    }
    if (web3 && account) {
      return fetchData();
    }
  }, [loading]);

  const stakeTokens = async (amount) => {
    setLoading(true);
    await stechToken.methods
      .approve(tokenFarm._address, amount)
      .send({ from: account, gas: "300000" })
      .on("transactionHash", async (hash) => {
        console.log("hash", hash);
        await tokenFarm.methods
          .stakeTokens(amount)
          .send({ from: account, gas: "300000" })
          .on("transactionHash", (hash) => {
            setLoading(false);
          });
      });
  };

  const unstakeTokens = (amount) => {
    setLoading(true);

    tokenFarm.methods
      .unstakeTokens()
      .send({ from: account })
      .on("transactionHash", (hash) => {
        setLoading(false);
      });
  };
  console.log("Test Contract re-render");
  return (
    <>
      {loading ? (
        <div class="flex items-center justify-center ">
          <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div class="max-w-sm rounded overflow-hidden  shadow-lg m-auto mt-6 text-center">
          <div class="font-bold text-xl mb-2">
            Staking Balance: {Web3.utils.fromWei(tokenFarmBalance, "Ether")}{" "}
            Stech
          </div>
          <div class="font-bold text-xl mb-2">
            Reward Balance: {Web3.utils.fromWei(dappTokenBalance, "Ether")} DAPP
          </div>

          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Balance: {Web3.utils.fromWei(stechTokenBalance, "Ether")}
            </div>
            <div class="font-bold text-l mb-2 flex">
              <span>Nhập số coin</span>
              <input
                class="appearance-none bg-transparent border-black py-2 px-4 rounded w-full text-gray-700 mr-3 leading-tight focus:outline-none"
                type="text"
                placeholder="Amount"
                aria-label="Number Coin"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>

            <div className="flex justify-around">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  let amount;
                  amount = value.toString();
                  amount = web3.utils.toWei(amount, "Ether");
                  stakeTokens(amount);
                }}
              >
                STAKE!
              </button>
              <button
                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => {
                  event.preventDefault();
                  unstakeTokens();
                }}
              >
                UN-STAKE...
              </button>
            </div>
            <MySVG 
              />
          </div>
        </div>
      )}
    </>
  );
}

// npx truffle console
// stechToken = await StechToken.deployed() // deployed stechToken
// accounts = await web3.eth.getAccounts() // call account to ganache
// balance = await stechToken.balanceOf(accounts[1]) // Tài khoản nhận toàn bộ số coin là tài khoản thứ 2 trong Ganache
// balance.toString()
// formattedBalance = web3.utils.fromWei(balance)

// npx truffle exec scripts/issue-token.js // Tạo token thưởng
