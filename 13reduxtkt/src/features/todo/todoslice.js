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
    reducers:{
        addtodo:(state, action)=>{
            const todo={
                id: nanoid (),
                text:action.payload,  
            }
            state.todos.push(todo)

        },
        removetodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }

})
export const {addtodo,removetodo}= todoslice.actions

export default todoslice.reducer