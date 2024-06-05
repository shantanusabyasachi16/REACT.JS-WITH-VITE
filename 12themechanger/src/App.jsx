import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider } from './context/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App(){
const [ thememode,setthememode ] = useState("light")
const  lightTheme= ()=>{
    setthememode('light')
}
const darkTheme= ()=>{
    setthememode('dark')
}
//acutal change in a theme
useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(thememode)
},[thememode])// dependencies= when any theme changes in thememode it will change




return(
<Themeprovider value={{thememode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
            </Themeprovider>
)

}
export default App
