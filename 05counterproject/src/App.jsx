import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
//Although Hooks generally replace class components, there are no plans to remove classes from React.

/*function App() {

  useState()
  
let counter= 20
const addvalue = ()=>{
  console.log("clicked",Math.random());
 counter = counter+1 */
 // Let us add a onclick() in the button to increase or decrease the counter value
 // After clicking the buttons the Ui doesnot change but we can see the changes in console.
 // To make it possible here comes REACT hooks


  // Here we are going to use a react hook that is {useState}
    // To use we have to import it = import { useState } from 'react'

   /* function App() {

      const [counter, setcounter]=  useState(20) // **setcounter is function
//and here counter (variable) will update every where in the UI
    //let counter= 20
let addvalue = ()=>{
 // console.log("clicked",Math.random());
 //counter = counter+1 
 setcounter(counter+1)
}

 let removevalue =()=>{
setcounter( counter-1)

}

  return (
   <>
   <h1>COUNTER PROJECT</h1>
   <h2>counter value: {counter}</h2>
   <button onClick={addvalue}
   >Add value{counter}</button>
   <button onClick ={removevalue}
   >Remove value{counter}</button>
   
   </>
  )
}*/

// Assignment=

function App() {

  let [counter,setcounter]= useState(0)

  const addvalue =()=>{
    if (counter<25) {
      setcounter(counter+1)
      
    } else {
      setcounter(counter)
      
    }
  }

  const removevalue =()=>{
    if (counter>=0) {
      setcounter(0)
      
    } else {
      setcounter(counter-1)
      
    }
  }




  return (
    <>
    <h1>COUNTER PROJECT</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}
    >Add value{counter}</button>
    <button onClick ={removevalue}
    >Remove value{counter}</button>
    
    </>
   )


}

export default App
