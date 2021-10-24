import { useState,useEffect  } from 'react'
// import {v4 as uuidv4} from 'uuid'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "./index.css"
import Header from './components/Header';
import { store, persistor } from './store/store'

// import { Route, Switch, Redirect } from 'react-router'
// import ToDo from './components/ToDo'
// import About from './components/About'
// import AboutMe from './components/AboutMe'
// import ToDoForm from './components/ToDoForm'
// import Nav from './components/Nav'
// import NotFound from './components/NotFound'


// const initialValue = [{
//   id:1,
//   task:"mengerjakan exercise",
//   complete:true
// },
//   {
//     id:2,
//     task:"mengerjakan assigment",
//     complete: false
//   }
// ]

function App() {
  // const [options, setOptions] = useState([]);
  // const [todos, setTodos] = useState([])
  // const [todos, setTodos] = useState(initialValue)
  // const [search, setSearch] = useState('')
  // const [filteredData,setFilterdData] = useState([])

  // const addTask = (userInput) => {
  //   if(userInput) {
  //     const newItem = {
  //       id: uuidv4(),
  //       task: userInput,
  //       complete: false
  //     }
  //     setTodos([...todos, newItem])
  //   }
  // }

  // const removeTask = (id) => {
  //   setTodos([...todos.filter((todo) => todo.id !== id)])
  // }

  // const handleToggle = (id) => {
  //   setTodos([
  //     ...todos.map((todo) => 
  //       todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
  //     )
  //   ])
  // }

  // useEffect(() => {
  //   setFilterdData(
  //   todos.filter( todo =>{
  //   return todo.task.toLowerCase().includes( search.toLowerCase() )
  // })
  //   )
  // },[search, todos])
  

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <Header/>
      </PersistGate>
      </Provider>

      {/* <Nav/>
      <Switch>
            <Route exact path="/" component={ToDoForm}>
              <input type="text" placeholder="Seacrh" onChange={ e => setSearch(e.target.value)}/>
              <header>
                <h1>TODOS</h1>
              </header>
              <todos addTask={addTask} />
              {filteredData.map((todo) => {
                return (
                  <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
              })}
            </Route>
            <Route path="/About" component={About}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route component={NotFound}/>
            <Redirect to="/" />
        </Switch> */}
    

      {/* <input type="text" placeholder="Seacrh" onChange={ e => setSearch(e.target.value)}/>
      <header>
        <h1>TODOS</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {filteredData.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            />
        )
      })} */}
    </div>
  );
}

export default App;
