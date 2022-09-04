
import {useState} from 'react'
const AddTask = ( {onAdd}) => {             // taking in onAdd prop for use from app.js wrap in curlys for func
  const [text, setText] = useState('')   // these variables are used to change state of property and set defualt values
  const [day, setDay] = useState('')    //for submission of form we add to app.js
  const [reminder, setReminder] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()     //this prevents the page from reloading or submitting to another page

    if(!text) {                 //validation for task text (make sure form is filled out)
      alert('please add a task')
      return
    }
    onAdd({text, day, reminder})  //if text passes then call onAdd passing in object with text 

    setText('')       // this clears the form after submission
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit} className="px-2 ring-1 ring-slate-800 bg-slate-500 mb-14 rounded-2xl h-75 p-6 hover:shadow-xl ">
        <label>
        <span className='block text-xl font-light text-slate-900'>Task</span>
            
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"/>
      </label>
        
      <label>
        <span className='block text-xl font-light text-slate-900'>Day & Time</span>
            
            <input type='text' value={day} onChange={(e) => setDay(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"/>
      </label>
      <label>
        <div className="flex mt-3 rounded">
        <div><span className=' text-xl font-light text-slate-900'>Set Task Reminder</span></div>
        
            <div className="flex-auto"> {/* checked boxes take in true or false value */}
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className=" h-7 w-7 ml-4 mt-1 bg-white border border-slate-300 "/>
            </div>
            <div className="">
        <input className=" shadow-md shadow-green-50/50 px-2 ring-1 ring-black-800 rounded-md text-normal bg-violet-400 text-zinc-800 h-8 hover:bg-cyan-300 hover:text-white w-24 hover:border border-white" type="submit" value="Save Task"/>
        </div>
            </div>
      </label>
        

    </form>
  )
}

export default AddTask