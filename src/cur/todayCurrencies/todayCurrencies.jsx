import { useState } from 'react';
import s from './todayCurrencies.module.css';

export const TodayCurrencies = () =>{
  const[todayValue] = useState({
    euro: 440,
    dollar: 400,
    rubble: 6
  });
  return(    
    <div className={s.todayCurrencies}>
      <h1 >Today currencies</h1>
      <div>1 euro = {todayValue.euro} amd</div>
      <div>1 dollar = {todayValue.dollar} amd</div>
      <div>1 rubble = {todayValue.rubble} amd</div>
    </div>
   
  );
};