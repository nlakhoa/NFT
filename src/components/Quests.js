import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import styled from "styled-components";
import { findIndex } from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Quests() {
  const [statusQuests, setStatusQuests] = useState("quests");
  const [showModal, setShowModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");
  const [missionSuccess, setMissionSuccess] = useState([]);
  const [change, setChange] = useState(false);
  const [fished, setFished] = useState(false);

  // useEffect(() => {
  //   return Object.entries(localStorage).map((valueJSON) => {
  //     console.log(valueJSON)
  //     if (valueJSON && 
  //       valueJSON[0] !== "persist:home" &&
  //       valueJSON[0] !== "persist:home" &&
  //       valueJSON[0] !== "i18nextLng" &&
  //       valueJSON[0] !== "persist:wallet"
  //     ) {
  //       let value = JSON.parse(valueJSON[1]);
  //       setMissionSuccess((oldArray) => [
  //         ...oldArray,
  //         { name: value.name[0], time: value.name[1], point: value.point },
  //       ]);
  //     }
  //   });
  // }, [change]);

  const renderQuest = () => {
    if (!fished) {
      return (
        <div className="quests__body-footer w-full">
          <div className="body-footer__daily grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Daily</p>
              <img
                src="	https://dsgmetaverse.com/images/mission/leve1.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Sign in</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+1</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("Sign-in")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Sign-in", 1)}
                  >
                    {!checkMission("Sign-in") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Daily</p>
              <img
                src="	https://dsgmetaverse.com/images/mission/leve1.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Swap</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+1</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("Swap")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Swap", 1)}
                  >
                    {!checkMission("Swap") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Daily</p>
              <img
                src="	https://dsgmetaverse.com/images/mission/leve1.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">{`Mint vDSG > 0.1`}</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+2</span> Points
                  </p>
                  <Link
                    to="/mint"
                    className={
                      !checkMission("Mint")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                  >
                    {!checkMission("Mint") ? "Claimed" : "Start"}
                  </Link>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Daily</p>
              <img
                src="	https://dsgmetaverse.com/images/mission/leve1.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Swap 3 times</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+2</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("3times")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("3times", 2)}
                  >
                    {!checkMission("3times") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
          </div>

          <div className="body-footer__daily grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="		https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">
                  Invite friends(never used dinosaur eggs before) to trade
                </p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+20</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("friends")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("friends", 20)}
                  >
                    {!checkMission("friends") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="		https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">{`Trade volume > 30,000 USDT on BNB-BUSD`}</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+50</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("BNB-BUSD")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("BNB-BUSD", 50)}
                  >
                    {!checkMission("BNB-BUSD") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">{`Trade volume > 30,000 USDT on BNB-DSG`}</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+50</span> Points
                  </p>
                  <p
                    className={
                      !checkMission("BNB-DSG")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("BNB-DSG", 50)}
                  >
                    {!checkMission("BNB-BUSD") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">{`Mint vDSG > 1`}</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+20</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("Mint-vDSG")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Mint-vDSG", 20)}
                  >
                    {!checkMission("BNB-DSG") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>

            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Trade on the NFT market</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+20</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("NFT-market")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("NFT-market", 20)}
                  >
                    {!checkMission("NFT-market") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Harvest trade mining rewards</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+15</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("Harvest-trade")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Harvest-trade", 15)}
                  >
                    {!checkMission("Harvest-trade") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Advanced</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve2.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Harvest BNB earnings from MHD</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+10</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("Harvest-BNB")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Harvest-BNB", 10)}
                  >
                    {!checkMission("Harvest-BNB") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
          </div>

          <div className="body-footer__daily grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-3">
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Special</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve3.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">Complete all daily and advanced quests</p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+30</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("advanced-quests")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("advanced-quests", 30)}
                  >
                    {!checkMission("advanced-quests") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Special</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve3.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">
                  Complete all daily Swap quests in this season
                </p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+66</span> Points{" "}
                  </p>
                  <p
                    className={
                      !checkMission("this-season")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("this-season", 66)}
                  >
                    {!checkMission("this-season") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
            <div className="footer__daily-item">
              <img
                src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                alt=""
                className="footer__img-left"
              />
              <p className="footer__daily-title">Special</p>
              <img
                src="https://dsgmetaverse.com/images/mission/leve3.png"
                alt=""
                className="footer__img-right"
              />
              <div className="daily-item__body">
                <p className="sign">
                  Invite 15 friends(never used dinosaur eggs before) to trade in
                  this season
                </p>
                <div className="flex justify-between">
                  <p className="number">
                    <span>+100</span> Points
                  </p>
                  <p
                    className={
                      !checkMission("Invite-15")
                        ? "btn-start"
                        : "btn-start btn-start-active"
                    }
                    onClick={() => startQuestion("Invite-15", 100)}
                  >
                    {!checkMission("Invite-15") ? "Claimed" : "Start"}
                  </p>
                </div>
              </div>
              <div className="daily-item__footer flex justify-between">
                <p>Quest ends in</p>
                <p className="flex">
                  4 h 42 m 35 s <BiTimeFive className="icon-time" />
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="quests__body-footer  w-full">
          <div className="body-footer__daily grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-3">
            {!checkMission("Sign-in") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Daily</p>
                <img
                  src="	https://dsgmetaverse.com/images/mission/leve1.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Sign in</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+1</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("Sign-in")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Sign-in", 1)}
                    >
                      {!checkMission("Sign-in") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("Swap") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Daily</p>
                <img
                  src="	https://dsgmetaverse.com/images/mission/leve1.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Swap</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+1</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("Swap")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Swap", 1)}
                    >
                      {!checkMission("Swap") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("Mint") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Daily</p>
                <img
                  src="	https://dsgmetaverse.com/images/mission/leve1.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">{`Mint vDSG > 0.1`}</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+2</span> Points
                    </p>
                    <p
                      className={
                        !checkMission("Mint")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Mint", 2)}
                    >
                      {!checkMission("Mint") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("3times") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon1.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Daily</p>
                <img
                  src="	https://dsgmetaverse.com/images/mission/leve1.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Swap 3 times</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+2</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("3times")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("3times", 2)}
                    >
                      {!checkMission("3times") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="body-footer__daily grid xl:grid-cols-2 sm:grid-cols-1 gap-3">
            {!checkMission("friends") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="		https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">
                    Invite friends(never used dinosaur eggs before) to trade
                  </p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+20</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("friends")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("friends", 20)}
                    >
                      {!checkMission("friends") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("BNB-BUSD") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="		https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">{`Trade volume > 30,000 USDT on BNB-BUSD`}</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+50</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("BNB-BUSD")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("BNB-BUSD", 50)}
                    >
                      {!checkMission("BNB-BUSD") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("BNB-BUSD") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">{`Trade volume > 30,000 USDT on BNB-DSG`}</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+50</span> Points
                    </p>
                    <p
                      className={
                        !checkMission("BNB-DSG")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("BNB-DSG", 50)}
                    >
                      {!checkMission("BNB-BUSD") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("Mint-vDSG") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">{`Mint vDSG > 1`}</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+20</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("Mint-vDSG")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      k={() => startQuestion("Mint-vDSG", 20)}
                    >
                      {!checkMission("Mint-vDSG") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("NFT-market") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Trade on the NFT market</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+20</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("NFT-market")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("NFT-market", 20)}
                    >
                      {!checkMission("NFT-market") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("Harvest-trade") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Harvest trade mining rewards</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+15</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("Harvest-trade")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Harvest-trade", 15)}
                    >
                      {!checkMission("Harvest-trade") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}
            {!checkMission("Harvest-BNB") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon2.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Advanced</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve2.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Harvest BNB earnings from MHD</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+10</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("Harvest-BNB")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Harvest-BNB", 10)}
                    >
                      {!checkMission("Harvest-BNB") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="body-footer__daily grid xl:grid-cols-2 sm:grid-cols-1 gap-3">
            {!checkMission("advanced-quests") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Special</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve3.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">Complete all daily and advanced quests</p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+30</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("advanced-quests")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("advanced-quests", 30)}
                    >
                      {!checkMission("advanced-quests") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}

            {!checkMission("this-season") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Special</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve3.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">
                    Complete all daily Swap quests in this season
                  </p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+66</span> Points{" "}
                    </p>
                    <p
                      className={
                        !checkMission("this-season")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("this-season", 66)}
                    >
                      {!checkMission("this-season") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}
            {!checkMission("Invite-15") ? (
              <div className="footer__daily-item">
                <img
                  src="	https://dsgmetaverse.com/images/mission/Ribbon3.png"
                  alt=""
                  className="footer__img-left"
                />
                <p className="footer__daily-title">Special</p>
                <img
                  src="https://dsgmetaverse.com/images/mission/leve3.png"
                  alt=""
                  className="footer__img-right"
                />
                <div className="daily-item__body">
                  <p className="sign">
                    Invite 15 friends(never used dinosaur eggs before) to trade
                    in this season
                  </p>
                  <div className="flex justify-between">
                    <p className="number">
                      <span>+100</span> Points
                    </p>
                    <p
                      className={
                        !checkMission("Invite-15")
                          ? "btn-start"
                          : "btn-start btn-start-active"
                      }
                      onClick={() => startQuestion("Invite-15", 100)}
                    >
                      {!checkMission("Invite-15") ? "Claimed" : "Start"}
                    </p>
                  </div>
                </div>
                <div className="daily-item__footer flex justify-between">
                  <p>Quest ends in</p>
                  <p className="flex">
                    4 h 42 m 35 s <BiTimeFive className="icon-time" />
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
  };

  const totalPoint = () => {
    let sum = 0;
    missionSuccess.map((item) => {
      sum += item.point;
    });
    return sum;
  };
  const renderPointHistory = () => {
    let sum = 0;
    let result = missionSuccess.map((item) => {
      let time = moment.unix(item.time).toString();
      sum += item.point;
      return (
        <div
          className="flex justify-between w-full text-left mb-2"
          key={item.time}
        >
          <div className="w-1/4">{item.name}</div>
          <div className="w-1/4">+{item.point}</div>
          <div className="w-1/4">{sum}</div>
          <div className="w-1/4">{time}</div>
        </div>
      );
    });
    return result;
  };

  const startQuestion = (name, number) => {
    localStorage.setItem(
      name,
      JSON.stringify({
        name: [name, Math.floor(Date.now() / 1000)],
        point: number,
      })
    );
    toast.success("Received successfully");

    setChange(!change);
  };

  const checkMission = (check) => {
    let result = findIndex(missionSuccess, function (value) {
      return value.name === check;
    });
    return result === -1;
  };

  const Quests = styled.div`
 .meta__modal{
    max-width: 480px;
    max-height: 600px;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 18px; 
    background-color: ${(props) => props.theme.bgItem};
    color: ${(props) => props.theme.textBody};
    z-index: 99999999999;
    position: fixed;
    right: calc(50% - 233px);
    top: calc(50% - 160px);
    min-width: 480px;
    .meta__modal-header{
      justify-content: space-between;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      padding-bottom:8px;
      .header-icon{
        color: ${(props) => props.theme.borderBtn};
        font-size:32px;
        cursor: pointer;
      }
      .header-icon:hover{
        opacity:0.8;
      }
    }
   
    .meta__modal-body-stake{
      padding-top:24px;
        .body-stake{
          background: ${(props) => props.theme.bgBodyTop};
          box-shadow: rgb(16 64 54 / 21%) 0px 1px 3px 0px inset;
          border-radius: 10px;
          margin-bottom: 6px;
          font-size: 18px;
          padding: 16px;
          font-weight: 500;
          .body-stake__body-bot{
            font-size:24px;
            margin-top:12px
          }
          .body-stake__body{
            overflow: hidden
          }
          .btn-max{
            color: black;
            border: 2px solid black;
            background-color: ${(props) => props.theme.borderBtn};
            box-shadow: white 28px 22px 70px 68px;
            cursor: pointer;
            border-radius: 25px;
            font-size: 16px;
            margin: auto 12px;
            height: 36px;
            text-align:center;
            line-height:36px
          }
          img{
            width: 64px;
            margin-right: 12px;
          }
        }  
        .body-stake__bot{
          p:nth-child(1){
            opacity:0.6;
          }
          p:nth-child(2){
            font-size:24px;
            font-weight: bold;
            color:  ${(props) => props.theme.borderBtn}
          }
        }
        .btn-claim{
          color: black;
          border: 2px solid ${(props) => props.theme.borderBtn};
          background: ${(props) => props.theme.borderBtn};
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 25px;
          margin: 12px auto 6px auto;
          max-width: 176px;
          font-size: 16px;
          text-align: center;
        }
        .modal__des{
          font-size:18px;
          margin-bottom:36px;
        }
      }
    }
  }
    .quests {
      min-height: calc(100vh - 80px);
      background: ${(props) => props.theme.bgBodyTop};
      .quests__header,
      .quests__center,
      .quests__body {
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        color: ${(props) => props.theme.textBody};
        .quests__title {
          font-size: 36px;
          font-weight: bold;
        }
        .quests__des {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 40px;
        }
      }
      .quests__center {
        margin-bottom: 24px;
        .quests__btn-left {
          background-color: rgb(239, 244, 245);
          border-radius: 16px;
          display: inline-flex;
          box-shadow: rgb(126 126 126) 0px 4px 0px 0px;
          width: auto;
          margin-right: 20px;
          p {
            color: ${(props) => props.theme.borderBtn};
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 25px;
            margin-left: 8px;
            font-size: 15px;

            font-weight: bold;
          }
          p:hover {
            opacity: 0.9;
          }
          .active {
            border: 2px solid ${(props) => props.theme.borderBtn};
            background: ${(props) => props.theme.borderBtn}; 
            color: black;
            margin-bottom: 4px;
          }
        }
        .invite {
          padding: 6px 18px;
          cursor: pointer;
          border-radius: 25px;
          margin-left: 8px;
          font-size: 15px;
          border: 2px solid ${(props) => props.theme.borderBtn};
          background: ${(props) => props.theme.borderBtn};
          color: black;
          margin-bottom: 4px;
          font-weight: bold;
        }
        .invite:hover {
          opacity: 0.9;
        }
        .form-switch {
          cursor: pointer;
          span {
            margin: auto 0;
          }
        }

        .form-switch i {
          position: relative;
          display: inline-block;
          margin-right: 0.5rem;
          width: 46px;
          height: 26px;
          background-color: #e6e6e6;
          border-radius: 23px;
          vertical-align: text-bottom;
          transition: all 0.3s linear;
          margin: auto 12px;
        }

        .form-switch i::before {
          content: "";
          position: absolute;
          left: 0;
          width: 42px;
          height: 22px;
          background-color: ${(props) => props.theme.bgBodyTop};
          border-radius: 11px;
          transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
          transition: all 0.25s linear;
        }

        .form-switch i::after {
          content: "";
          position: absolute;
          left: 0;
          width: 22px;
          height: 22px;
          background-color: #fff;
          border-radius: 11px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
          transform: translate3d(2px, 2px, 0);
          transition: all 0.2s ease-in-out;
        }

        .form-switch:active i::after {
          width: 28px;
          transform: translate3d(2px, 2px, 0);
        }

        .form-switch:active input:checked + i::after {
          transform: translate3d(16px, 2px, 0);
        }

        .form-switch input {
          display: none;
        }

        .form-switch input:checked + i {
          background-color: #4bd763;
        }

        .form-switch input:checked + i::before {
          transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
        }

        .form-switch input:checked + i::after {
          transform: translate3d(22px, 2px, 0);
        }
      }
      .quests__body {
        padding-bottom: 80px;
        .quests__body-note {
          font-size: 20px;
        }
        .quests__body-season {
          margin-top: 24px;

          .body-season__left {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

            padding: 36px;
            font-size: 16px;
            background: ${(props) => props.theme.borderBtn};
            border-radius: 12px;
            color: white;
            margin-right: 12px;
            .body-season__left-item-1 {
              p:nth-child(2) {
                font-size: 18px;
                margin-top: 6px;
              }
            }
            .body-season__left-item-2 {
              p:nth-child(2) {
                font-size: 32px;
                font-weight: bold;
              }
              .icon-question {
                font-size: 20px;
                margin: auto 6px;
              }
            }
          }
          .body-season__right {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin: 0 12px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 16px;
            justify-content: center;
            text-align: center;
            padding: 12px;
            .season__right-btn {
              color: white;
              border: 2px solid ${(props) => props.theme.borderBtn};
              background: ${(props) => props.theme.borderBtn};
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 25px;
              margin-left: 8px;
              font-size: 16px;
              max-width: 145px;
              margin-bottom: 12px;
            }
            .season__right-btn:hover{
              opacity:0.8
            }
          }
        }

        .quests__body-footer {
          .body-footer__daily {
            margin-top: 24px;

            .footer__daily-item {
              border-radius: 20px;
              position: relative;
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              padding: 24px;
              max-width: 368px;
              margin-bottom: 12px;
              .footer__img-left,
              .footer__daily-title {
                position: absolute;
                top: 0;
                left: 0;
              }
              .footer__img-right {
                position: absolute;
                top: 0;
                right: 10%;
              }
              .footer__daily-title {
                width: 90px;
                text-align: center;
                position: absolute;
                left: -6px;
                top: 23px;
                transform: rotate(-45deg);
                z-index: 1;
                color: white;
                font-size: 18px;
              }
              .daily-item__body {
                font-size: 18px;
                background: ${(props) => props.theme.bgItem};
                box-shadow: rgb(216 221 221 / 35%) 0px 1px 3px 0px inset;
                border-radius: 20px;
                padding: 20px 26px;
                margin: 64px 0 20px 0;
                p {
                  margin-bottom: 12px;
                }
                .sign {
                  font-weight: bold;
                }
                .number {
                  color: ${(props) => props.theme.borderBtn};
                  span {
                    font-weight: bold;
                    font-size: 20px;
                  }
                }
              }
              .btn-start {
                color: white;
                padding: 3px 18px;
                cursor: pointer;
                border-radius: 25px;
                margin-left: 8px;
                border: 2px solid #ccc;
                background: #ccc;
              }
              .btn-start-active{
                border: 2px solid ${(props) => props.theme.borderBtn};
                background: ${(props) => props.theme.borderBtn};
              }
              .btn-start:hover {
                opacity: 0.9;
              }
              .daily-item__footer {
                font-size: 18px;
                .icon-time {
                  font-size: 24px;
                  margin: auto 8px;
                }
                p:nth-child(2) {
                  color: ${(props) => props.theme.borderBtn};
                }
              }
            }
          }
        }
      }
      .exchange__table {
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        color: rgb(0, 0, 0);
        margin-bottom: 32px;
        border-radius: 20px;
        box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
        color: rgb(40, 52, 51);
        padding: 12px 24px;
        font-size: 18px;
        background: white;
        margin-top: 32px;
        .table__header {
          font-weight: bold;
        }
        .table__body {
          align-items: center;
          display: flex;
          flex-direction: column;
          min-height: 300px;
          text-align: center;
          img {
            height: 80px;
            width: auto;
          }
          .table__body-item {
            margin-top: 36px;
          }
        }
        .table__footer {
          p {
            width: 28px;
            height: 28px;
            color: rgb(0, 0, 0);
            border: 1px solid rgb(40, 52, 51);
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            margin: 0px 5px;
            text-align: center;
            font-weight: bold;
          }
          p:nth-child(1) {
            margin-left: 12px;
          }
          p:nth-child(2) {
            background: ${(props) => props.theme.borderBtn};
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .quests {
        .quests__header,
        .quests__center,
        .quests__body {
          width: calc(100vw - 180px);
        }
        .quests__center {
          .quests__btn-left {
            p {
              padding: 6px 8px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 739px) {
      .meta__modal {
        right: 5%;
        max-width: 90%;
        min-width: 0;
      }
      .quests {
        .quests__header,
        .quests__center,
        .quests__body,
        .exchange__table {
          width: calc(100vw - 40px);
          .quests__body-season {
            flex-wrap: wrap;
            .body-season__left {
              margin-bottom: 24px;
            }
            .body-season__right {
              .season__right-btn {
                margin-top: 12px;
              }
            }
          }
        }
        .quests__center {
          flex-wrap: wrap;
          .quests__btn-left {
            p {
              padding: 6px 10px;
            }
          }
          .form-switch {
            margin-top: 12px;
            justify-content: start;
          }
        }
      }
       {
        width: 100%;
        margin: 24px auto 20px auto;
      }
    }
  `;
  return (
    <Quests>
      {showModal && (
        <>
          <div className="meta__modal">
            <div className="meta__modal-header flex ">
              <h4>{currentStatus === "invite" ? "Invite" : "Claim rewards"}</h4>
              <AiFillCloseCircle
                className="header-icon"
                onClick={() => setShowModal(false)}
              />
            </div>
            {currentStatus === "invite" ? (
              <div className="meta__modal-body-stake">
                <div className="body-stake">
                  <div className="flex justify-between body-stake__body ">
                    <p className="w-3/4 overflow-hidden">
                      https://dsgmetaverse.com/#/quests?InviteAddress=0x7D97cdFf89f3e1f436b7910cE97350a9806C8a41
                    </p>
                    <p className="btn-max w-1/4">COPY</p>
                  </div>
                </div>
                <div className="modal__des flex justify-between">
                  <p>Friend address</p>
                  <p>Reward points</p>
                </div>
              </div>
            ) : (
              <div className="meta__modal-body-stake">
                <div className="body-stake ">
                  <div className="flex body-stake__body-top justify-between">
                    <p>Last season total rewards DSG</p>
                    <p>Your points</p>
                  </div>
                  <div className="flex body-stake__body-bot justify-between">
                    <p>9999.9975</p>
                    <p>{totalPoint()}</p>
                  </div>
                </div>
                <div className="body-stake body-stake__bot flex">
                  <img
                    src="https://dsgmetaverse.com/static/media/DSG.e52521e9.svg"
                    alt=""
                  />
                  <div>
                    <p>Your reward DSG</p>
                    <p>0.000</p>
                  </div>
                </div>
                <p className="btn-claim">Claim rewards</p>
              </div>
            )}
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
      <div className="quests">
        <div className="quests__header">
          <h3 className="quests__title">Quests</h3>
          <p className="quests__des">
            Earn points, you can use the points to receive DSG rewards in the
            next season. You can invite friends, and the 10% points earned by
            friends will be rewarded to you. The reward DSG comes from the
            reserve pool, and the prize pool balance will be updated regularly
            every day. dsgmetaverse reserves the right not to issue rewards to
            users who have used unusual means to earn points.
          </p>
        </div>
        <div className="quests__center flex justify-between w-full">
          <div className=" flex xl:w-1/2 sm:w-full justify-between">
            <div className="quests__btn-left flex">
              <p
                className={statusQuests === "quests" ? "active" : ""}
                onClick={() => setStatusQuests("quests")}
              >
                Quests
              </p>
              <p
                className={statusQuests === "points" ? "active" : ""}
                onClick={() => setStatusQuests("points")}
              >
                Points History
              </p>
            </div>
            <p
              className="quests__btn-mid invite"
              onClick={() => {
                setCurrentStatus("invite");
                setShowModal(true);
              }}
            >
              Invite
            </p>
          </div>
          <label className="form-switch  w-1/2 flex justify-end ">
            <input
              type="checkbox"
              name="check"
              checked={fished}
              onChange={(e) => setFished(e.target.checked)}
            />
            <i></i>
            <span>Fished</span>
          </label>
        </div>
        <div className="quests__body">
          <p className="quests__body-note">
            Note: It will need 5-10 mins to synchronize the data after quest
            completion.
          </p>
          <div className="quests__body-season flex w-full ">
            <div className="body-season__left xl:w-3/4 sm:w-full ">
              <div className="flex justify-between flex-wrap">
                <div className="body-season__left-item-1 mr-2">
                  <p>Season 3 ends in</p>
                  <p>24 d 5 h 20 m 56 s</p>
                </div>
                <div className="body-season__left-item-2 mr-2">
                  <p>My points</p>
                  <p>{totalPoint()}</p>
                </div>
                <div className="body-season__left-item-2 mr-2">
                  <p className="flex">
                    Rewards Pool for season 3{" "}
                    <AiOutlineQuestionCircle className="icon-question" />
                  </p>
                  <p>0</p>
                </div>
                <div className="body-season__left-item-2">
                  <p>Last season total rewards</p>
                  <p>9999.9975</p>
                </div>
              </div>
            </div>
            <div className="body-season__right xl:w-1/4 sm:w-full ">
              <p
                className="season__right-btn"
                onClick={() => {
                  setCurrentStatus("claim");
                  setShowModal(true);
                }}
              >
                Claim rewards
              </p>
              <p>You can claim rewards after season ends</p>
            </div>
          </div>
          {statusQuests === "quests" ? (
            renderQuest()
          ) : (
            <div className="exchange__table w-full">
              <div className="flex table__header mb-3">
                <div className="w-1/4">Event</div>
                <div className="w-1/4">Changes</div>
                <div className="w-1/4">Balance</div>
                <div className="w-1/4">Time</div>
              </div>
              <div className="table__body">{renderPointHistory()}</div>
              <div className="table__footer flex justify-center">
                <span>Total 1 page</span>
                <div className="footer__btn flex">
                  <p>{`<`}</p>
                  <p>1</p>
                  <p>{`>`}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Quests>
  );
}
