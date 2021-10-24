import { useState } from 'react'
import {useDispatch} from "react-redux"
import { tambahData } from '../store/todoSlice'
import {v4 as uuidv4} from 'uuid'

function ToDoForm({ addTask }) {
    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = userInput === ""
        if(formIsNotEmpty){
            alert("Input Kosong") 
        }
        else{
            const newItem = {
            id: uuidv4(),
            task: userInput,
            complete: false
        }
            dispatch(tambahData(newItem))
            setUserInput("") 
        } 

        // addTask(userInput)
        // setUserInput("")
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <div styleName="inputsatu">
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Add Todo...."
            />        
            <button>Submit</button>
            </div>
        </form>
    )
}

export default ToDoForm