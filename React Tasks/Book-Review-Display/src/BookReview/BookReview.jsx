import React, { useState } from 'react'
import './BookReview.css'
const BookReview = (props) => {
    const {Book} = props
    const {id, title, author, review, rating} = Book

    const [newReview, setNewReview] = useState(review)
    const [isEditing, setIsEditing] = useState(false)

    const handleReviewChange = (event) =>{
        setNewReview(event.target.value)
    }

    const handleButtonClick = () =>{
        if(isEditing){
            Book.review = newReview
            setIsEditing(false)
        } else{
            setIsEditing(true)
        }
    }

  return (
    <>
        <div className='display-book-parent'>
            <div  className='display-book'>
                <p><strong>Id : </strong>{id}</p>
                <p><strong>Title : </strong>{title}</p>
                <p><strong>Author : </strong>{author}</p>
                <p><strong>Rating : </strong>{rating}</p>
                {isEditing ? (
                    <>  
                        <div>
                            <label htmlFor="review"><strong>Review : </strong></label>
                            <input type="text" value={newReview} onChange={handleReviewChange} placeholder='Type and Update Your Review'/>
                        </div>
                    </>
                    ) : (<p><strong>Review : </strong>{review}</p>) 
                }

                <button className='edit-btn' onClick={handleButtonClick}>{isEditing? 'Save Review' : 'Edit Review'}</button>

            </div>
        </div>
        
    </>

  )
}

export default BookReview