import { useState } from 'react';
import s from './currency.module.css';
import ru from '../icons/ru.png';
import us from '../icons/us.png';
import am from '../icons/am.png';
import eu from '../icons/eu.png';

export default function Currency({amCu,ruCu,usCu,euCu,value,setValue,mult,setMult,firstCurrencyName}){
  const [currencyName,setCurrencyName] = useState('amd ֏');
 
  return(
    <div className={s.currency}>
      <div><input className={s.input} type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>{firstCurrencyName}</div> 
      <div className={s.result}>
        <div className={s.rightButtons}>
          want:
          <div className={s.flag}>
            <img src={am} alt="am" width={'20px'}/>
            <button className={s.rightButton} onClick={()=>{
              setMult(amCu);
              setCurrencyName('amd ֏');          
            }}>AMD</button>
          </div>
          <div className={s.flag}>
            <img src={ru} alt="ru" width={'20px'}/>
            <button className={s.rightButton} onClick={()=>{
              setMult(ruCu);
              setCurrencyName('rub ₽');          
            }}>RUB</button>
          </div>
          <div className={s.flag}>
            <img src={us} alt="us" width={'20px'}/>
            <button className={s.rightButton} onClick={()=>{
              setMult(usCu);
              setCurrencyName('usd $');          
            }}>USD</button>
          </div>
          <div className={s.flag}>
            <img src={eu} alt="eu" width={'20px'}/>
            <button className={s.rightButton} onClick={()=>{
              setMult(euCu);
              setCurrencyName('eu €');          
            }}>EU</button>
          </div>
        </div>
        <div className={s.math}>{Math.round(mult*value*1000)/1000} {currencyName}</div> 
      </div> 
    </div>
  );
}