import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
  const {name, price, description} = props.items
  return (
    <>
        <div className='menus'>
            <h2>Name: {name}</h2>
            <p><strong>Price :</strong> {price}</p>
            <p><strong>Description :</strong> {description}</p>
        </div>
    </>
  )
}

export default MenuItem