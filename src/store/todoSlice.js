import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const initialValue = [{
  id:1,
  task:"mengerjakan exercise",
  complete:true
},
  {
    id:2,
    task:"mengerjakan assigment",
    complete: false
  }
]

export const todoSlice = createSlice({
    name : "todo",
    initialState:{
        todos: initialValue
    },

    reducers:{
        hapusData : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        
        tambahData : (state, action) => {
        const newItem = {
        id: uuidv4(),
        // task: userInput,
        // complete: false,
        ...action.payload,
        }
        state.todos = [...state.todos, newItem]
        // setTodos([...todos, newItem])
        },

        togelData : (state, action ) => {
            state.todos = state.todos.map((todo) => 
            todo.id === action.payload ? { ...todo, complete: !todo.complete } : {...todo })
        },
    }
})

export const {hapusData, tambahData, togelData} = todoSlice.actions;

export default todoSlice.reducer