import './App.css'
import TeaDisplay from '../TeaDisplay/TeaDisplay'


function App() {

  const teaArray = [
    {name:"3 Roses" , origin:"India" , description:"3 Roses tea is a popular blend in India, known for its rich flavor and aroma. This tea is a carefully crafted blend of select tea leaves that offer strength, taste, and color. It is a preferred choice for making traditional Indian chai, offering a strong and refreshing brew that energizes with every sip. The blend is named '3 Roses' to signify the perfect combination of strength, color, and flavor in every cup." },
    {name:"Darjeeling Tea", origin:"Darjeeling, India" , description:"Darjeeling tea is often referred to as the 'Champagne of teas'. It is a light, aromatic tea with a floral fragrance and a musky spiciness that is unique to the region where it is grown."},
    {name:"Matcha" , origin:"Japan" , description:"Matcha is a finely ground powder of specially grown and processed green tea leaves. It is known for its vibrant green color, smooth flavor, and high antioxidant content."},
  ]

  return (
    <>
      <div>
        <h1>Tea Types</h1>
      </div>
      <div>
        {teaArray.map((element) => ( 
          <TeaDisplay tea={element}/>
        ))}
      </div>
    </>
  )
}

export default App
