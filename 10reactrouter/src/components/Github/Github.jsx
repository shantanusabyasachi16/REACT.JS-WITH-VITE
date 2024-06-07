import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setdata] =useState([])
    // useEffect(()=>{
    //     fetch('https://github.com/shantanusabyasachi16')
    //     .then(response=> response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >Github: {data.following}
    <img src={data.avatar_url}alt="Git picture" />
    </div>
  )
}

export default Github


export const gitloader = async()=>{
  const response = await  fetch('https://api.github.com/users/shantanusabyasachi16')
return response.json()


}









