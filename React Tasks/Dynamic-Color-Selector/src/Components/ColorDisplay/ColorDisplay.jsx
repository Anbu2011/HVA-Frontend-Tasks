import './ColorDisplay.css'

const ColorDisplay = (props) => {
  const {displayColor} = props
  
  return (
    <>
    
      <div className='display-message'>
        {displayColor && <p style={{backgroundColor: `${displayColor}`}}>The background Color Changed into {displayColor}</p>}
      </div>
      
    </>
  )
}

export default ColorDisplay