import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// "props" (short for "properties") are a mechanism for passing data from a parent component to a child component. 
//Props are read-only and allow you to dynamically configure and control the behavior of child components
///*
// In react , Every functional component have the access to the feature called as props.
// In React, "props" is a short form of "properties," and it's a fundamental concept for passing data from one component to another. 
// Props are a crucial aspect of building React applications, as they facilitate the composition and reusability of components by enabling communication between them.


function App() {
//we can pass any value from one component to another component
  let myobj ={
  usernmae:" shantanu",
  age : 23,
}
let myarr = [1,3,4]


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>
        tailwind test</h1>
      <Card username="dugu"btntext="visit once again"/>
      <Card username="shantanu"  />
 
    </>
  )
}

export default App
