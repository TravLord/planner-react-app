import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'    //impt shortcut, must import types for definition
import Button from './Button'         //button component is reuseable we can pass in colors and text as props


const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()   // below using this var we can conditionally render a component based on the path
  return (
   <header className='inline-flex space-x-8 ml-4 mt-4 p-3 '>
    <h1 className="text-3xl font-light text-slate-400/100 decoration-1">{title}</h1>
    {location.pathname === '/' && <Button color={showAdd ? 'crimson':' '} text={showAdd ? 'Close':'Add'} onClick ={onAdd} />} {/*conditionaly render button based off of path also toggle text to when button clicked as well */}
    
   </header>
  )
}

Header.defaultProps ={
    title:'Fit Wit Planner',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header