import React, { useState, useContext } from 'react'
import { NFTContext } from './contexts/NFTContext'
import { StechNFTAbi } from './abi'
import { useSelector } from "react-redux";

import axios from 'axios'

export default function PreviewAvata() {
     const CONTRACT_ADDRESS = '0xAb18d7Db2f7053fD662f336375cB9e11183a55F4'
     //Hiện tại đã có NFT ID18

     const [id, setId] = useState(159)
     const {
          EYES, eye, 
          HEADDRESS, headdress, 
          PHONE, phone, 
          MOUTH, mouth, 
          CLOTHES, clothes, 
          ACCESSORIES, accessories,
          BACKGROUND, background,
          result,
          web3Api,
          account
     } = useContext(NFTContext)
     const createNFT = async (e) => {
          const composite = await axios.post('http://localhost:5000/composite', 
               {result: result ,id: id}
          )
          console.log(composite);
          if(composite.data.success) {
               const res = await axios.post('http://localhost:5000/createMetadata', 
                    {id: id}
               )
               if(res.data.success) {
                    const contract = await new web3Api.web3.eth.Contract(StechNFTAbi, CONTRACT_ADDRESS)
                    console.log(contract.methods)
                    const setDomain = await contract.methods.inputDomain(
                         res.data.metadata.slice(0,90))
                         .send({from: account})
                    console.log("Domain",setDomain,id,contract.methods);
                    const receipt = await contract.methods.createNFT(id).send({from: account})
                    console.log(receipt);
                    if(receipt.status) {
                         setId(id + 1)
                         console.log("Tạo thành công NFT với ID: ",id);
                    }
               }
          }
     }

     return (
          <div className="preview-avatar">
               <div className="preview-main">
                    <h3>Metaverse Ape</h3>
                    <div className="preview-content">
                         {EYES.map(item => item.id === eye 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {HEADDRESS.map(item => item.id === headdress 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {PHONE.map(item => item.id === phone 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {MOUTH.map(item => item.id === mouth 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {CLOTHES.map(item => item.id === clothes 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {ACCESSORIES.map(item => item.id === accessories 
                              ?
                              <div key={item.image} className='preview-image z-index2'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                         {BACKGROUND.map(item => item.id === background 
                              ?
                              <div key={item.image} className='preview-image'>
                                   <img src={item.image} alt="" />
                              </div> 
                              : '')
                         }
                    </div>
               </div>
               <button onClick={createNFT} className='createNFT'>Create NFT</button>
          </div>
     )
}