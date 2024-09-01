import './App.css'
import BookReview from '../BookReview/BookReview'

function App() {
  const bookArray = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", review: "A compelling story about racial injustice in the Deep South, with memorable characters and a powerful message.", rating: 4.9 },
    { id: 2, title: "1984", author: "George Orwell", review: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.", rating: 4.8 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", review: "A tragic tale of love, wealth, and the American Dream, set in the Roaring Twenties.", rating: 4.7 },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", review: "A classic romantic novel that delves into themes of love, social status, and individual growth.", rating: 4.8 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", review: "A novel that captures the struggles of teenage rebellion and identity, with a unique narrative voice.", rating: 4.5 },
    { id: 6, title: "Moby Dick", author: "Herman Melville", review: "An epic tale of obsession and revenge, set against the backdrop of the whaling industry.", rating: 4.3 }
  ]

  return (
    <>
      <div>
            <h1>Book Review</h1>
      </div>
      {
        bookArray.map((book) => (
          <BookReview Book = {book} />
        ))
      }
    </>
  )
}

export default App
