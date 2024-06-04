import React from 'react'
import { useParams } from 'react-router-dom'

// Using params in React allows you to pass dynamic parameters to a component through the URL. 
function User() {
    const userid= useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl'>User:{userid}</div>
  )
}

export default User