//nanoid another way to create unique ids
import { createSlice, nanoid } from "@reduxjs/toolkit";


//it takes an initial state=>>how the store will look like first
const initialState={
    todos:[{
        id:1,
        text:"hello world"
    }]
}

export const todoslice= createSlice({
    name:"todo",
    initialState,

})