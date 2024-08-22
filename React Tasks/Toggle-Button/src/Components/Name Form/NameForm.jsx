import React, { useState } from 'react'
import './NameForm.css'

const NameForm = () => {

  const [name, setName] = useState("")
  const [displayName, setDisplayName] = useState("")

  const handleNameChange = (event) =>{
    setDisplayName("")
    setName(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    setDisplayName(name)
    setName("")
  }
  return (
    <>
        <div>
          <h1>Name Form</h1>
        </div>

        <form className='nameForm' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='nameLabel'>Name : </label>
            <input type="name"  value={name} onChange={handleNameChange} placeholder='Enter Your Name'/>
          </div>
          <div>
            <button className='submitBtn'>Submit</button>
          </div>
          
        </form>
        {displayName && <p style={{fontWeight:'600' ,color:'blue'}}> {displayName} </p>}
        
    </>
  )
}

export default NameForm