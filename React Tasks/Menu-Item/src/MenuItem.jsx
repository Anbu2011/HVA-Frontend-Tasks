import React from 'react'

const MenuItem = ({items}) => {
  return (
    <>
        <div>
            
            <h2>Name: {items.name}</h2>
            <p><strong>Price :</strong> {items.price}</p>
            <p><strong>Description :</strong> {items.description}</p>
        </div>
    </>
  )
}

export default MenuItem