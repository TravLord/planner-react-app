
import { useLocation } from 'react-router-dom'
import {FaAngleRight} from 'react-icons/fa'
import {FaCalendarDay} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'

//passing in onDelete from Tasks to Tasks initially from app.js
// To pass id in must call a func before onDelete in FaTimes
const Task = ({task, onDelete, onToggle}) => {
  const location = useLocation()
  return (
    <div className="bg-slate-400 rounded-lg " >
        {/* wrap in curly braces(template literal) to create js expression inital default class setting first followed by 
        if task reminder true then add a border to the task*/}
        {location.pathname === '/' &&<article className={`flex items-start space-x-6 p-6 ${task.reminder ? 'border-l-8 border-white text-xl shadow-xl shadow-white-500/50' : ''}`}onDoubleClick={() => onToggle(task.id)}>
        
      <FaAngleRight className='text-2xl font-light text-zinc-500'/>
      <div className="min-w-0 relative flex-auto bg-slate-400">
        <h3 className="font-light text-slate-900 truncate pr-20 text-xl">{task.text}</h3>
                <div className='flex flex-nowrap'>
                <div><FaCalendarDay className='text-xl mt-2 text-cyan-100 '/></div>
                <div className='ml-2 mt-1 font-normal'>{task.day}</div>
        
                </div>
                <p className={`${task.reminder ? 'underline underline-offset-8 mt-3 text-cyan-200' : 'text-slate-400 '}`}onDoubleClick={() => onToggle(task.id)}>Reminder Set!</p>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 mt-1 flex items-center space-x-1">
            <dt className="text-rose-500 text rounded-full hover:bg-slate-600 hover:font-bold hover:border-red-500">
            <FaTrashAlt onClick={() => onDelete(task.id)}className='text-2xl m-1 mb-1 cursor-pointer'/>             
            </dt>            
          </div>
          <div className="flex-none w-full mt-2">            
            <dd className="text-slate-400"></dd>
          </div>
        </dl>
      </div>
    </article>}
    </div>  )
}

export default Task