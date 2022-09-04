import Task from "./Task"

//setTasks is how we recreate the state from 
const Tasks = ({tasks,onDelete, onToggle}) => {
    
  return (

    <div className="container mx-auto hover:shadow-lg divide-y divide-slate-200">      
        {tasks.map((task)=>(
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/> //task component, passing in task as a prop
        ))}        
    </div>
  )
}

export default Tasks