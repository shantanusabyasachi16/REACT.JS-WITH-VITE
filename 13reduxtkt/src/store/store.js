import{configureStore} from "@reduxjs/toolkit"; // it came frome core redux not from from react redux
import todoReducer from '../features/todo/todoslice'

//export this method with a variable
export const store = configureStore({
    reducer:todoReducer
})


