const Jimp = require("jimp");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");
const Moralis = require("moralis/node");
const sharp = require("sharp");

const app = express();
app.use(express.json());
const Eye1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Yellow_phfd9m.png";
const Eye2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Purple_flk0rv.png";
const Eye3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Red_wcmzdv.png";
const Eye4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Green_jit30z.png";
const Eye5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Pink_rhb9yb.png";
const Eye6 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Cyan_awg8ka.png";

const EYE = [
  { id: 1, image: Eye1 },
  { id: 2, image: Eye2 },
  { id: 3, image: Eye3 },
  { id: 4, image: Eye4 },
  { id: 5, image: Eye5 },
  { id: 6, image: Eye6 },
];
const Headdress1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/12_x8cz7t.png";
const Headdress2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/10_mioewo.png";
const Headdress3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/11_sqjyi4.png";
const Headdress4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/9_fbb0v1.png";
const Headdress5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/7_w4yfrx.png";
const Headdress6 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/8_wxrrkf.png";
const Headdress7 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/1_owvn0o.png";
const Headdress8 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/4_rlpm71.png";
const Headdress9 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/3_r0d42k.png";
const Headdress10 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/6_yvtfac.png";
const Headdress11 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/5_na2opr.png";
const Headdress12 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/2_edy7st.png";

const HEADDRESS = [
  { id: 1, image: Headdress1 },
  { id: 2, image: Headdress2 },
  { id: 3, image: Headdress3 },
  { id: 4, image: Headdress4 },
  { id: 5, image: Headdress5 },
  { id: 6, image: Headdress6 },
  { id: 7, image: Headdress7 },
  { id: 8, image: Headdress8 },
  { id: 9, image: Headdress9 },
  { id: 10, image: Headdress10 },
  { id: 11, image: Headdress11 },
  { id: 12, image: Headdress12 },
];

const Mouth1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836692/NFT/ImageRoot/Mouth/7_jpwecb.png";
const Mouth2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836692/NFT/ImageRoot/Mouth/8_c3enq8.png";
const Mouth3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/1_ggyjxq.png";
const Mouth4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/4_fsmd3s.png";
const Mouth5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/5_ixe4wz.png";
const Mouth6 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/3_tbm1eq.png";
const Mouth7 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/2_zqcxuo.png";
const Mouth8 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/6_oxmotu.png";

const MOUTH = [
  { id: 1, image: Mouth1 },
  { id: 2, image: Mouth2 },
  { id: 3, image: Mouth3 },
  { id: 4, image: Mouth4 },
  { id: 5, image: Mouth5 },
  { id: 6, image: Mouth6 },
  { id: 7, image: Mouth7 },
  { id: 8, image: Mouth8 },
];
const Stuff1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836714/NFT/ImageRoot/Stuff/6_xoxeu5.png";
const Stuff2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/5_q2s3ud.png";
const Stuff3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/4_qkfl4s.png";
const Stuff4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/3_txzl0l.png";
const Stuff5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/2_mt8kp0.png";
const Stuff6 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/1_cl8y4e.png";

const STUFF = [
  { id: 1, image: Stuff1 },
  { id: 2, image: Stuff2 },
  { id: 3, image: Stuff3 },
  { id: 4, image: Stuff4 },
  { id: 5, image: Stuff5 },
  { id: 6, image: Stuff6 },
];

const Cloth1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836583/NFT/ImageRoot/Clothes/11_srqwtn.png";
const Cloth2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836583/NFT/ImageRoot/Clothes/6_neakuy.png";
const Cloth3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/10_rwgzxu.png";
const Cloth4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/9_h16egu.png";
const Cloth5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/7_rrhui7.png";
const Cloth6 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/8_nqea3e.png";
const Cloth7 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/5_hztdfv.png";
const Cloth8 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/1_rzpqen.png";

const CLOTHES = [
  { id: 1, image: Cloth1 },
  { id: 2, image: Cloth2 },
  { id: 3, image: Cloth3 },
  { id: 4, image: Cloth4 },
  { id: 5, image: Cloth5 },
  { id: 6, image: Cloth6 },
  { id: 7, image: Cloth7 },
  { id: 8, image: Cloth8 },
];
const Background1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836814/NFT/ImageRoot/Background/0default_g9uc1p.png";
const Background2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836488/NFT/ImageRoot/Background/Blue_j82f9n.png";
const Background3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Red_ojuaq1.png";
const Background4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Black_pbezbp.png";
const Background5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Green_ale8c0.png";

const BACKGROUND = [
  { id: 1, image: Background1 },
  { id: 2, image: Background2 },
  { id: 3, image: Background3 },
  { id: 4, image: Background4 },
  { id: 5, image: Background5 },
];
const Body1 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836550/NFT/ImageRoot/Body/5_frjluv.png";
const Body2 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/4_ioynt1.png";
const Body3 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/2_scvbwe.png";
const Body4 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/3_t3gocb.png";
const Body5 =
  "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/1_psglri.png";

const BODY = [
  { id: 1, image: Body1 },
  { id: 2, image: Body2 },
  { id: 3, image: Body3 },
  { id: 4, image: Body4 },
  { id: 5, image: Body5 },
];
const PORT = process.env.PORT || 5000;

app.use(cors());
// https://shlprjquhmo7.usemoralis.com
app.post("/composite", async (req, response) => {
  const { result, id, backgroundIpfs, bodyBase64 } = req.body;
  var images = [];
  //BACKGROUND
  const backgroundPromise = new Promise((res, rej) => {
    if (backgroundIpfs !== undefined) {
      res({ image: backgroundIpfs });
    } else {
      res(BACKGROUND.find((item) => item.id - 1 === result.currentBackground));
    }
  });
  images.push(backgroundPromise.then((data) => data));

  //ACCESSORIES
  const bodyPromise = new Promise((res, rej) => {
    if (bodyBase64 !== undefined) {
      let imgBuffer = Buffer.from(bodyBase64, "base64");
      console.log(imgBuffer);
      sharp(imgBuffer)
        .toFile(`./src/final-images/body.png`, (err, info) => {
          if (info) {
            res({ image: info });
          }
          if (err) {
            console.log("err", err);
          }
        })
        .resize(1300, 1300);
      console.log("chay qua dc day");
      res({ image: `./src/final-images/body.png` });
    } else {
      res(BODY.find((item) => item.id - 1 === result.currentBody));
    }
  });
  images.push(bodyPromise.then((data) => data));
  //CLOTHES
  const clothesPromise = new Promise((res, rej) => {
    res(CLOTHES.find((item) => item.id - 1 === result.currentClothes));
  });
  images.push(clothesPromise.then((data) => data));
  //EYE
  const eyePromise = new Promise((res, rej) => {
    res(EYE.find((item) => item.id - 1 === result.currentEyes));
  });
  images.push(eyePromise.then((data) => data));

  //HEADDRESS
  const headdressPromise = new Promise((res, rej) => {
    res(HEADDRESS.find((item) => item.id - 1 === result.currentHeaddress));
  });
  images.push(headdressPromise.then((data) => data));

  //MOUTH
  const mouthPromise = new Promise((res, rej) => {
    res(MOUTH.find((item) => item.id - 1 === result.currentMouth));
  });
  images.push(mouthPromise.then((data) => data));
  //PHONE
  const stuffPromise = new Promise((res, rej) => {
    res(STUFF.find((item) => item.id - 1 === result.currentStuff));
  });
  images.push(stuffPromise.then((data) => data));

  Promise.all(images).then(async (data) => {
    var jimps = [];
    //JimpRead image
    for (var i = 0; i < data.length; i++) {
      console.log("images", i, data[i].image);
      jimps.push(await Jimp.read(data[i].image));
    }

    //Composite image
    Promise.all(jimps)
      .then(function (value) {
        return Promise.all(jimps);
      })
      .then(async function (image) {
        console.log(image);
        image[0].resize(1300, 1300); //resize background w1062 h1062
        image[1].resize(1300, 1300); //resize background w1062 h1062
        image[0].composite(image[1], 0, 0);
        image[0].composite(image[2], 0, 0);
        image[0].composite(image[3], 0, 0);
        image[0].composite(image[4], 0, 0);
        image[0].composite(image[5], 0, 0);
        image[0].composite(image[6], 0, 0);
        //Write Image
        image[0].write(`./src/final-images/success.png`, async (data) => {
          console.log("Wrote the image", id);
          return response.json({ success: true, message: "Composite Image" });
        });
      });
  });
});

app.post("/uploadImage", async (req, res) => {
  const { id, image } = req.body;
  console.log("image", id, image);
  let ipfsArray = [];
  let promises = [];
  let metadata = [];
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(`./src/final-images/success.png`, (err, data) => {
        if (err) rej();
        ipfsArray.push({
          path: `images/${id}.png`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );

  //Push Image to IPFS
  Promise.all(promises).then(() => {
    axios
      .post(
        "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
        ipfsArray,
        {
          headers: {
            "X-API-KEY":
              "k30Du9VUUJbgHG6db8QItgxGryCNwcw0KhZ1tfZz86e1LlabB44y1sMwEwqprYPr",
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        return res.json({ success: true, image: response.data[0].path });
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
