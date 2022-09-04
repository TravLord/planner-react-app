import Button from './Button'
import Wellness from '../Images/Wellness.jpg'
import { useLocation } from 'react-router-dom'
const WellRemind = ({onAdd,showAdd}) => {
  const location = useLocation()
  return (
    <div>
        {location.pathname === '/' &&<figure class="lg:ml-72 md:ml-0 mt-10 space-x-8 sm:flex md:flex rounded-3xl p-2 md:p-0 ">
  <img class="border-double border-4 border border-slate-400 w-24 h-18 md:w-64 ml-6 md:h-64 md:rounded-full rounded-full" src={Wellness} alt="no image" width="384" height="512"></img>
  <div class="hover:shadow-xl shadow-black-500/200  border border-slate-400 rounded-full pt-6 md:p-8 text-right md:text-center space-y-2 lg:space-y-4">
    <blockquote>
      <p class=" mt-4 lg:mt-5 sm: text-lg text-2xl text-slate-400/100 font-light">
        Take time for self care 
         
      </p>
     
    </blockquote>
    <figcaption class="font-normal ">
      <div class="text-slate-500  dark:text-sky-400 text-underline underline">
        Fit Wit Wellness reminder
      </div>
      <div class="text-slate-400/100">
        There is always time 
      </div>
    </figcaption>
    <button className=' w-64 h-8 sm:h-18 sm:w-24 sm:mx-auto md:w-36 md:h-8 sm:rounded-md md:rounded-md rounded-md h-11 
     font-normal rounded-sm        
    border border-slate-500 bg-cyan-100 hover:border-1 hover:border-amber-100 
    hover:bg-amber-50 hover:text-zinc-400 text-slate-600/100 shadow-md shadow-slate-400/50'onClick ={onAdd} text={showAdd}>Schedule you time</button>
    
  </div>
  <img class="border-double border-4 border border-slate-400 w-24 h-18 md:w-64 ml-28 md:h-64 md:rounded-full rounded-full" src={Wellness} alt="no image" width="384" height="512"></img>
</figure>}
    </div>
  )
}

export default WellRemind