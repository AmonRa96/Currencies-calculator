import { useState } from 'react';
import './App.css';
import Currency from './cur/currency';
import ru from './icons/ru.png';
import us from './icons/us.png';
import am from './icons/am.png';
import eu from './icons/eu.png';


function App() {
  const[value,setValue] = useState(1);
  const[mult,setMult] = useState(1);
  const[firstVal,setFirstVal] =useState('amd ֏');
  const [firstCurrencyName,setFirstCurrencyName] = useState('amd ֏');
  
  return (
    <div className="App">
      <div className="todayCurrencies">
        <h1 >Today currencies</h1>
        <div>1 euro = 440 amd</div>
        <div>1 dollar = 400 amd</div>
        <div>1 rubble = 6 amd</div>
      </div>
      <div className={'leftButtons'}>
        have:
        <div className="flag">
          <img src={am} alt="am" width={'20px'}/>
          <button className={'leftButton'} onClick={()=>{
            setFirstVal('amd ֏');
            setFirstCurrencyName('amd ֏');
          }}>AMD</button>
        </div>
        <div className="flag">
          <img src={ru} alt="rub" width={'20px'}/>
          <button className={'leftButton'} onClick={()=>{
            setFirstVal('rub ₽');
            setFirstCurrencyName('rub ₽');
          }}>RUB</button>
        </div>
        <div className="flag">
          <img src={us} alt="us" width={'20px'}/>
          <button  className={'leftButton'} onClick={()=>{
            setFirstVal('usd $');
            setFirstCurrencyName('usd $');
          }}>USD</button>
        </div>
        <div className="flag">
          <img src={eu} alt="eu" width={'20px'}/>
          <button className={'leftButton'} onClick={()=>{
            setFirstVal('eu €');
            setFirstCurrencyName('eu €');
          }}>EU</button>
        </div>  
      </div>
     
      {
        ( firstVal==='amd ֏'&&<Currency value={value} setValue={setValue} mult={mult} setMult={setMult} amCu={1} ruCu={0.16} usCu={0.0025} euCu={0.0022} countryCur={'am'} firstCurrencyName={firstCurrencyName}/>)||
      (firstVal==='rub ₽'&&<Currency value={value} setValue={setValue} mult={mult} setMult={setMult} amCu={6} ruCu={1} usCu={0.014} euCu={0.013} countryCur={'ru'} firstCurrencyName={firstCurrencyName}/>)||
      (firstVal==='usd $'&&<Currency value={value} setValue={setValue} mult={mult} setMult={setMult} amCu={400} ruCu={66} usCu={1} euCu={0.9} countryCur={'us'} firstCurrencyName={firstCurrencyName}/>)||
      (firstVal==='eu €'&&<Currency value={value} setValue={setValue} mult={mult} setMult={setMult} amCu={440} ruCu={73} usCu={1.1} euCu={1} countryCur={'eu'} firstCurrencyName={firstCurrencyName}/>)
      }
     
    </div>
  );
}

export default App;
