import React from 'react'
import './UserProfile.css'

const UserProfile = (props) => {
    const {each , fn} = props
    const {name , age , bio} = each
    
    return (
    <>
        
        <div className='profile'>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <button onClick={() => fn(bio)}>Show Details</button>
        </div>
        
    </>
  )
}

export default UserProfile