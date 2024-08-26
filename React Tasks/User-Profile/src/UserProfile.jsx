import React, { useState } from 'react'
import './UserProfile.css'

const UserProfile = (props) => {
    const {each} = props
    const {name , age , bio} = each

    const [showBio, setShowBio] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    
    const toggleFun = () =>{
        setIsVisible(prevState => !prevState);
    };

    const funBio = (bioValue) =>{
        setShowBio(bioValue);
    };

    
    return (
    <>
        
        <div className='profile'>
            <p>Name : {name}</p>
            <p>Age : {age}</p>

            {showBio && isVisible && <p style={{color:'black'}}>Bio : {showBio}</p>}
            <button onClick={() => {funBio(bio);  {toggleFun(true)};}}>
                {showBio && isVisible ? ('Hide Bio') : ('Show Bio')}
            </button>
        </div>
        
    </>
  )
}

export default UserProfile