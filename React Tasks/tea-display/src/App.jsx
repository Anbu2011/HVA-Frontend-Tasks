import './App.css'
import TeaDisplay from './TeaDisplay'


function App() {

  const teaArray = [
    {Name:"3 Roses" , Origin:"India" , Description:"3 Roses tea is a popular blend in India, known for its rich flavor and aroma. This tea is a carefully crafted blend of select tea leaves that offer strength, taste, and color. It is a preferred choice for making traditional Indian chai, offering a strong and refreshing brew that energizes with every sip. The blend is named '3 Roses' to signify the perfect combination of strength, color, and flavor in every cup." },
    {Name:"Darjeeling Tea", Origin:"Darjeeling, India" , Description:"Darjeeling tea is often referred to as the 'Champagne of teas'. It is a light, aromatic tea with a floral fragrance and a musky spiciness that is unique to the region where it is grown."},
    {Name:"Matcha" , Origin:"Japan" , Description:"Matcha is a finely ground powder of specially grown and processed green tea leaves. It is known for its vibrant green color, smooth flavor, and high antioxidant content."},
  ]

  return (
    <>
    <div>
      {teaArray.map((ele) => ( 
        <TeaDisplay tea={ele} />
      ))}
    </div>
      
    </>
  )
}

export default App
