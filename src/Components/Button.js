import PropTypes from 'prop-types'
//destructuring component only using the props passed in from parent components color/text
//including functions
const Button = ({color, text, onClick}) => {
  return (

    <button onClick={onClick}style={{backgroundColor:color}} //taking in the passed prop color and func, component reusage
    className='h-11 px-5
     font-semibold rounded-sm        
    border border-black-200 bg-cyan-200 hover:border-1 hover:border-cyan-400 
    hover:bg-green-400 hover:text-white text-slate-800 shadow-md shadow-green-50/50'>
        {text}
        </button>
  )

  Button.defaultProps = {
    color:'slate gray',
  }
  Button.propTypes = {
    text:PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }
}

export default Button