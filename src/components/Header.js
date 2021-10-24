import { useState,useEffect  } from 'react'
// import {v4 as uuidv4} from 'uuid'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../index.css'
import { Route, Switch, Redirect } from 'react-router'
import ToDo from './ToDo';
import { useSelector, useDispatch } from 'react-redux';
import { hapusData } from '../store/todoSlice';
import { togelData } from '../store/todoSlice';
// import About from './components/About'
// import AboutMe from './components/AboutMe'
import ToDoForm from './ToDoForm'
// import Nav from './components/Nav'
// import NotFound from './components/NotFound'
// import Nav from './Nav';


function Home() {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()


    return (
        <div>
            {/* <input type="text" placeholder="Seacrh" onChange={ e => setSearch(e.target.value)}/> */}
            <header>
                <h1>TODOS</h1>
            </header>
            <ToDoForm/>
            {todos.map((todo) => {
                return (
                <ToDo
                    todo={todo}
                    key={todo.id}
                    // toggleTask={handleToggle}
                    togelData={() => {dispatch(togelData(todo.id))}}
                    hapusData={() => {dispatch(hapusData(todo.id))}}
                    />
                )
            })}
        </div>
    )
}


export default Home