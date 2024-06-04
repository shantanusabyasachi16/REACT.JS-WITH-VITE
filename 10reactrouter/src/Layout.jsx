import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Now as we know tht our heaer and footer content will be same som only the middle part content will be changed so let use a refernce which will be the collection of changing content that we can mention

// In React Router, the <Outlet> component is used in nested route structures when you want child routes to be rendered inside their parent routes. It acts as a placeholder for where child routes should be rendered within a parent route component.


import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>
    </>
)}

export default Layout