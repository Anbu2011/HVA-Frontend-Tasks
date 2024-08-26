import React from 'react'
import './UserProfile.css'

const UserProfile = (props) => {
    const {each} = props
    const {name , age , bio} = each

    return (
    <>
        
        <div className='profile'>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Bio : {bio}</p>
        </div>
    
    </>
  )
}

export default UserProfile