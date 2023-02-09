import './App.css';
import { useState } from 'react';
import { TodayCurrencies } from './cur/todayCurrencies/todayCurrencies';
import {CurrencyWant} from './cur/CurrencyWant/currencyWant';
import {CurrencyHave} from './cur/CurrencyHave/currencyHave';

export const App =() => {
  const[value,setValue] = useState(1); 
  const[currencyProps, setCurrencyProps] = useState({
    amCu:1,
    ruCu:0.16,
    usCu:0.0025,
    euCu:0.0022,
    countryCur: 'am'
  });

  return (
    <div className="App">
      <TodayCurrencies/>
      <CurrencyHave value={value}  setValue={setValue} setCurrencyProps={setCurrencyProps}/>
      <CurrencyWant value={value} setValue={setValue} {...currencyProps} />    
    </div>
  );
};


