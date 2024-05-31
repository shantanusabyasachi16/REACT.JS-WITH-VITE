/*function heelo()_{
    return[] //it is also a custom hook 

}*/ // custom hooks also can use inbuilt hooks

import { useEffect , useState } from "react";

//use used as prefix for any cutom hook

function usecurrencyinfo(currency){
    const [ data, setdata] = useState({})
    useEffect(()=>{
fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then((res)=> res.json()) //to convert into json format
.then((res)=> setdata(res[currency]))
console.log(data);
 },[currency])
 console.log(data);
 
 return data
    
}
export default usecurrencyinfo;