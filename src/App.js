import { useLocation } from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import logo from './Images/logo.svg'
import Header from "./Components/Header"  //import the component to app.js
import Tasks from "./Components/Tasks"
import { useState, useEffect } from "react"  //hook useState to use state inside of func , hook useEffect used if you want something to happen right when the page loads
import AddTask from './Components/AddTask'
import WellRemind from './Components/WellRemind'
import Footer from './Components/Footer'
import About from './Components/About'


const App = () => {   //ShowAddTask is our bool to toggle our state of showing a task setShowAddTask is our fuction we can call to update it
  const[showAddTask, setShowAddTask] = useState(false) // tasks is our state value with setTasks function to update it 
  const[tasks,setTasks] = useState([])

  useEffect(() => {
    const getTasks = async ()=> {   //calling fetchTasks which returns promise
      const taskFromServer = await fetchTasks() //fetch tasks gets data we await in then 
      setTasks(taskFromServer) //this will set our state from the db using the fetched tasks
    }
    getTasks() //result of get tasks 
  }, [])  //dependency array example-> "user" permissions?s

  //Fetch tasks     we want this function outside of useEffect so we can use it elsewhere
  const fetchTasks = async () => {    // using fetch api fetch returns a promise so we must await that promise
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()  //getting json data
    return data 
  }

  //Fetch Task
  const fetchTask = async (id) => {    // using fetch api fetch returns a promise so we must await that promise
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()  //getting json data
    return data 
  }

//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks',   //post request adding data so headers with content type are needed
  {                                                        //wrap data we are sending in body (tasks) in stringify to 
                                                            // convert js obj to json string
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body:JSON.stringify(task),
  }) 
  const data = await res.json()  //result of json string data (new task added)

  setTasks([...tasks,data])  //set existing tasks with new data recieved

  // const id = Math.floor(Math.random() * 1000) + 1  // this creates id with random number(NOT NEEDED WITH BACKEND AUTO ID CREATION)
  // const newTask = { id, ...task}  // new task is object with above id and copy whats passed in ... to the form to add
  // setTasks([...tasks,newTask])  //set to an array and copy whats already there to add to newTask object
}

//Delete Task  we need the state to be passed down from this function through props to children
// creating a new array with the tasks that are not passed in as user input(click event)->"id"
const deleteTask = async (id) => {
await fetch( `http://localhost:5000/tasks/${id}`,{ //ADD 2ND ARG OF OBJECT BEING A DELETE METHOD
  method: 'DELETE'
})

  setTasks(tasks.filter((task)=> task.id !==id)) // removing the task and setting the state 
}
//Toggle reminder styling to toggle reminder from true to false 
const toggleReminder = async (id) => {   //update to individual task passing in id 
  const taskToToggle = await fetchTask(id) //get tasl id from api through fetch task method
  const updTask = {...taskToToggle,  
  reminder: !taskToToggle.reminder} //change reminder to opposite val within fetched task

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',   //await async fetch api promise BACKTICKS
    headers:{
    'Content-type': 'application/json'  //headers for sending data w/content type
  },
  body: JSON.stringify(updTask),   //data we're sending to turn data to json string 
})

const data = await res.json()

  setTasks(
    tasks.map((task) => task.id === id ? {...task,reminder: data.reminder} : task
    )   // create a new array with task id value passed in; ignore other properties
  )    //data.reminder is result of json data
}
  return (
     <Router>
   
   <div className='h-96 rounded-lg'>
     
      <div className="flex bg-slate-100 m-h-full bg-zinc-900">
      
        <div className="container mx-auto bg-zinc-900 m-h-full rounded-lg">
      
        <div>
          <img className="inline-flex h-12  mb-4 mt-1 pl-3"src={logo} alt="img"></img>    
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>  {/* onadd fires off setShowAddTask set to opposite of value of boolean addTask form is dependent on the toggle peice of state if showAddTask boolean true then show AddTask component (&& shorter if stmt) */}
            {showAddTask && <AddTask onAdd={addTask}/>}  {/* Adding addTask prop (func) to component this is called by onSubmit func event*/}
                                    
      
            {tasks.length > 0 ? <Tasks tasks={tasks}    /*If tasks > 0 show them else show message*/
              onDelete={deleteTask} onToggle={toggleReminder}/> : (
             <p className='text-white text-left font-light text-xl underline'>No tasks to show, add task or some you time.</p>       
            )} 
      
      <WellRemind onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>    

      <Routes>
      <Route path='/about' element={<About/>}/>  {/*Bringing in about component through route path */}
      </Routes>
      <br></br>
      <br></br>
      
      <Footer/> 
      
        </div>
      </div>
    </div>
</div>

</Router>
     
  );
}

export default App;
