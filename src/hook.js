import  {USD_CURRENCY,AMD_CURRENCY,EU_CURRENCY,RUB_CURRENCY} from './constants';

export const hook = (currencyName) =>{
  let isAMD = false;
  let isRUB = false;
  let isUSD = false;
  let isEU = false;
  if(currencyName === AMD_CURRENCY){
    isAMD=true;
  }
  if(currencyName === RUB_CURRENCY){
    isRUB=true;
  }
  if(currencyName === USD_CURRENCY){
    isUSD=true;
  }
  if(currencyName === EU_CURRENCY){
    isEU=true;
  } 
  return {
    isAMD,
    isRUB,
    isUSD,
    isEU
  };
};