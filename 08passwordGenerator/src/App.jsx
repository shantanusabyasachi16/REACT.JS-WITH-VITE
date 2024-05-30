import { useState, useCallback } from 'react'

function App() {
  const [length, setlength] = useState(10)
  const [numberpassed, setnumberpassed] = useState(false)
  const [character,setcharacter] = useState(false)
  const {password,setpassword}= useState("")



  //password generator=
 /* The React useCallback Hook returns a memoized callback function.
  
 Think of memoization as caching a value so that it does not need to be recalculated. 
  
  This allows us to isolate resource intensive functions so that they will not automatically run on every render.

    The useCallback Hook only runs when one of its dependencies update.

    This can improve performance.*/

    const passwordgenerator = useCallback(()=>{
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

        // letus give the conditions over the dependencies
        if (numberpassed) str+="123456789" 
        
        if (character) str+="!@#$%^&*(){}[]<>,;':\"-_=+\\/|`~.?\n\t" 

        // now actually let us use a loop to get value(random)
        for (let i = 1; i <= array.length; i++) {
         let char= Math.floor(Math.random() * str.length+1)

          // now we need to pass that index into "pass" to generate a single character of the whole password
         pass = str.charAt(char)

 
        }
        setpassword(pass)

          
      


    },[length,numberpassed,character,setpassword])
  



  return (
    <>
      <h1 className='text-4xl text-center'>PASSWORD GENERATOR</h1>
    
    </>
  )
}

export default App
