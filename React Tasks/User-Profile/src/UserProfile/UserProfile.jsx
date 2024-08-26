import React, { useState , useEffect} from 'react'
import './UserProfile.css'

import axios from 'axios'

const UserProfile = () => {
    
    const [fetchData, setFetchData] = useState()
    
    const getData = async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        setFetchData(response.data)
    }

    getData()
    
    if (!fetchData) {
        return <p>Loading...</p>;
    }

    return (
    <>
        
        <div className='profile'>
            <p>Id : {fetchData.id}</p>
            <p>Name : {fetchData.name}</p>
            <p>User Name : {fetchData.username}</p>
            <p>Email : {fetchData.email}</p>
            <p>City : {fetchData.address.city}</p>
            <p>Zipcode : {fetchData.address.zipcode}</p>
            <p>Website : {fetchData.website}</p>
            <p>Phone : {fetchData.phone}</p>
        </div>
        
    </>
  )
}

export default UserProfile