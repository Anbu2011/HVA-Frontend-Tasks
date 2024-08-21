import './App.css'
import MenuItem from './MenuItem'

function App() {
  
  const menuArray = [
    { name: "Margherita Pizza", price: 8.99, description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil."},
    { name: "Caesar Salad", price: 6.49, description: "Crisp romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing."},
    { name: "Grilled Chicken Sandwich", price: 7.99, description: "Juicy grilled chicken breast with lettuce, tomato, and mayo on a toasted bun."},
    { name: "Chocolate Lava Cake", price: 5.49, description: "Warm chocolate cake with a gooey molten center, served with vanilla ice cream."}
  ]
  return (
    <>
      <div>
        <h1>Menu Items</h1>
        {menuArray.map((ele) => (
           <MenuItem items={ele}/>
        ))}
      </div>
    </>
  )
}

export default App
