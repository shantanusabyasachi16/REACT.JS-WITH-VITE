import { theme } from "antd";
import React,{createContext, useContext} from "react";

// let us make a or create a  theme context here and give some properties and value such as default theme , light mode and dark mode
export const  ThemeContext = createContext({
    thememode:"light",
     darkTheme: ()=>{},
     lightTheme: ()=>{},
})

export const Themeprovider = ThemeContext.Provider

// now let us create a custom hook which holds the accessibility to use this themeContext by using useContext hook

export default function usetheme(){
    return useContext (ThemeContext)
}