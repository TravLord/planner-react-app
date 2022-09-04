import {Link} from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
const About = () => {
  return (
    <div>
      <div className='container mt-14 h-96 w-full mx-auto border-2 border-sky-300 rounded-md'>
    <h4 className="text-white text-center mt-12 text-xl">Version 1.1</h4>
    
    </div>
    <FaHome className='text-white'/>
    <Link className="text-sky-400"to='/'>Go Back</Link>
    
    </div>
  )
}

export default About
