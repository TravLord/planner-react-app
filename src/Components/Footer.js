import {Link} from 'react-router-dom'    //This makes the page instantly link over w/o reload
const Footer = () => {
  return (
    <div className="flex-item text-left">
    <footer>
        <p className="text-white mt-40">Copyright &copy; 2022</p>
        <Link className ="text-sky-400"to="/about">About</Link>
    </footer>
    </div>
  )
}

export default Footer



