import { useState, useCallback , useEffect ,useRef} from 'react'

function App() {
  const [length, setlength] = useState(10)
  const [numberpassed, setnumberpassed] = useState(false)
  const [character,setcharacter] = useState(false)
  const [password,setpassword]= useState("")



  //password generator=
 /* The React useCallback Hook returns a memoized callback function.
  
 Think of memoization as caching a value so that it does not need to be recalculated. 
  
  This allows us to isolate resource intensive functions so that they will not automatically run on every render.

    The useCallback Hook only runs when one of its dependencies update.

    This can improve performance.*/

    /////////// useref is used for taking refrence...we have to store in a variable
     const passref =useRef(null)

    const passwordgenerator = useCallback(()=>{
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

        // letus give the conditions over the dependencies
        if (numberpassed) str+="123456789" 
        
        if (character) str+="!@#$%^&*(){}[]<>,;':\"-_=+\\/|`~.?\n\t" 

        // now actually let us use a loop to get value(random)
        for (let i = 1; i <= length; i++) {
         let char= Math.floor(Math.random() * str.length+1)

          // now we need to pass that index into "pass" to generate a single character of the whole password
         pass += str.charAt(char)
 
        }
        setpassword(pass)
        

    },[length,numberpassed,character,setpassword])

    useEffect(()=>{
      passwordgenerator()   

    },[length,numberpassed,character, passwordgenerator])


    const  copyPassToClip= useCallback(()=>{
      passref.current?.select();
      passref.current?.setSelectionRange(0,4)
      window.navigator.clipboard.writeText(password)
    },[password])
  

  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500">
          <h1 className='text-white text-center my-3' >password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          readOnly // no one can write
          ref={passref}//uesref reference
          />
          <button
          onClick={copyPassToClip}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy  </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range" 
             min={0}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}}
             
             />
             <label>length{length}</label>
             
          </div>
          <div  className='flex items-center gap-x-1'>
          <input
           type="checkbox" 
          defaultChecked={numberpassed}
          id='numberinput'
          onChange={()=>{
            setnumberpassed((prev)=>!prev)  //true false will reverse in checkbox
          }}
         />
          <label htmlFor="numberinput">numbers</label>
          </div>
          <div  className="flex items-center gap-x-1">
          <input
           type="checkbox" 
          defaultChecked={character}
          id='characterinput'
          onChange={()=>{
           setcharacter((prev)=>!prev)  //true false will reverse in checkbox
          }}
         />
         <label htmlFor="characterinput">character</label>

          </div>
        </div>
        
      </div>
    
    </>
  )
}

export default App
