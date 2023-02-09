import { useEffect, useState } from 'react';
import s from './currencyWant.module.css';
import ru from '../../icons/ru.png';
import us from '../../icons/us.png';
import am from '../../icons/am.png';
import eu from '../../icons/eu.png';
import  {USD_CURRENCY,AMD_CURRENCY,EU_CURRENCY,RUB_CURRENCY} from '../../constants';
import {hook} from '../../hook';



export  const CurrencyWant = ({amCu,ruCu,usCu,euCu,value})=>{
  const [currencyName,setCurrencyName] = useState(AMD_CURRENCY);
  const[mult,setMult] = useState(1);
  const { isAMD, isRUB, isEU,isUSD} = hook(currencyName);

  useEffect(()=>{
    if(isAMD){
      setMult(amCu);
    }
    if(isRUB){
      setMult(ruCu);
    }
    if(isEU){
      setMult(euCu);
    }
    if(isUSD){
      setMult(usCu);
    }  
  },[amCu,ruCu,usCu,euCu,isAMD, isRUB, isEU,isUSD]); 
 
 
  return(
    <div className={s.currencyWant}>    
      <div className={s.buttons}>
        <span> Want:</span>
        <button className={isAMD?s.activeButton:s.button} onClick={()=>{             
          setCurrencyName(AMD_CURRENCY);                      
        }}><img src={am} alt="am" width={'20px'}/> AMD</button>        
        <button className={isRUB?s.activeButton:s.button} onClick={()=>{              
          setCurrencyName(RUB_CURRENCY);          
        }}><img src={ru} alt="ru" width={'20px'}/> RUB</button>     
        <button className={isUSD?s.activeButton:s.button} onClick={()=>{              
          setCurrencyName(USD_CURRENCY);          
        }}><img src={us} alt="us" width={'20px'}/> USD</button>               
        <button className={isEU?s.activeButton:s.button} onClick={()=>{            
          setCurrencyName(EU_CURRENCY);          
        }}><img src={eu} alt="eu" width={'20px'}/> EU</button>        
      </div>
      <div className={s.math}>{Math.round(mult*value*1000)/1000} {currencyName}</div> 
    </div>     
  );
};