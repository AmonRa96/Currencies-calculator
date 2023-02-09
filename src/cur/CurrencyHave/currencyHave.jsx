import ru from '../../icons/ru.png';
import us from '../../icons/us.png';
import am from '../../icons/am.png';
import eu from '../../icons/eu.png';
import  {USD_CURRENCY,AMD_CURRENCY,EU_CURRENCY,RUB_CURRENCY} from '../../constants';
import { useState } from 'react';
import {hook } from '../../hook';
import s from './currencyHave.module.css';



export const CurrencyHave = ({value,setValue,setCurrencyProps})=>{
  const [firstCurrencyName,setFirstCurrencyName] = useState(AMD_CURRENCY);   
  const { isAMD, isRUB, isEU,isUSD} = hook(firstCurrencyName);
  const handleButtonChange = (currency)=>{   
    setFirstCurrencyName(currency);   
  };

  return (
    <div className={s.currencyHave}>
      <div className={s.buttons}>
        <span>have:</span>                 
        <button  className={isAMD?s.activeButton:s.button} onClick={()=>{
          handleButtonChange(AMD_CURRENCY); 
          setCurrencyProps({
            amCu:1,
            ruCu:0.16,
            usCu:0.0025,
            euCu:0.0022,
            countryCur: 'am'
          });           
        }}><img src={am} alt="am" width={'20px'}/> AMD</button>     
        <button  className={isRUB?s.activeButton:s.button} onClick={(c)=>{
          handleButtonChange(RUB_CURRENCY);
          setCurrencyProps({
            amCu:6,
            ruCu:1,
            usCu:0.014,
            euCu:0.013,
            countryCur: 'ru'
          }); 
        }}><img src={ru} alt="rub" width={'20px'}/> RUB</button>                
        <button  className={isUSD?s.activeButton:s.button} onClick={()=>{
          handleButtonChange(USD_CURRENCY);
          setCurrencyProps({
            amCu:400,
            ruCu:66,
            usCu:1,
            euCu:0.9,
            countryCur: 'us'
          }); 
        }}><img src={us} alt="us" width={'20px'}/> USD</button>       
        <button className={isEU?s.activeButton:s.button} onClick={()=>{
          handleButtonChange(EU_CURRENCY);  
          setCurrencyProps({
            amCu:440,
            ruCu:73,
            usCu:1.1,
            euCu:1,
            countryCur: 'eu'
          });         
        }}><img src={eu} alt="eu" width={'20px'}/> EU</button>        
      </div> 
      <div><input className={s.input} type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>{firstCurrencyName}</div> 
    </div>  
  );
};