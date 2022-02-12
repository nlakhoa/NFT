
import React, { useState ,memo} from "react";
import { useTranslation } from "react-i18next";

export default function AvatarRight(props) {

    const { t } = useTranslation();
    const [nameDino, setNameDino] = useState("");
    const [statusInput, setStatusInput] = useState(false);
    const addDinoByCoin = async () => {
      await props.addDino(nameDino);
    };
  
    return (
      <div className="pickavt__body-right sm:xl:w-full xl:w-1/3">
        <div className="pickavt__body-right-body">
          <div className="pickavt__body-right-main">
            <p className="pickavt__body-right-name">
              {t("pickavatar.TheOriginal")}
            </p>
            {props.loading ? (
              <div className="pickavt__img">
                <img src="https://media1.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=ecf05e47zr7d94pypd8djqw70zr5xvnbgbme1loqfuxdz6qe&rid=giphy.gif&ct=g" />
              </div>
            ) : (
              <div className="pickavt__img">
                {props.preview ? (
                  <img src={props.preview} alt="" />
                ) : (
                  <img src={props.Background[props.currentBackground]} alt="" />
                )}
                <img src={props.bodyBase64 ? props.bodyBase64 : props.Body[props.currentBody]} alt="" />
                
                <img src={props.Clothes[props.currentClothes]} alt="" />
                <img src={props.Eyes[props.currentEyes]} alt="" />
                <img src={props.Headdress[props.currentHeaddress]} alt="" />
                <img src={props.Mouth[props.currentMouth]} alt="" />
                <img src={props.Stuff[props.currentStuff]} alt="" />
              </div>
            )}
  
            <p className="pickavt__color">
              {t("pickavatar.Color")}: <span>#F6FFF0</span>
            </p>
          </div>
          <p className="pickavt__right-create">{t("pickavatar.Createyou")}</p>
          <input
            className="form-control"
            type="text"
            name="nameDino"
            value={nameDino}
            onChange={(e) => {
              setNameDino(e.target.value);
              if (nameDino.length > 1) {
                setStatusInput(true);
              } else {
                console.log(nameDino.length, 0);
                setStatusInput(false);
              }
            }}
            placeholder="Nhập tên khủng long"
          />
          <div className="pickavt__right-btn">
            <span
              className="pickavt__right-btn-l"
              onClick={() => {
                props.randomSkin();
                setNameDino("");
              }}
            >
              {t("pickavatar.random")}
            </span>
            <span
              className={
                statusInput && !props.loading
                  ? "pickavt__right-btn-r active"
                  : "pickavt__right-btn-r disable"
              }
              onClick={() => addDinoByCoin()}
            >
              {t("pickavatar.connect")}
            </span>
          </div>
          <div className="pickavt__right-current">
            <p>
              {t("pickavatar.Drawing")} <span>0</span>
            </p>
            <p>
              {t("pickavatar.Avatar")}:<span> {props.balance}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }