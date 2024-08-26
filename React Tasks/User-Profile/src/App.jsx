import './App.css'
import UserProfile from './UserProfile'

function App() {
  const users=[
    {name:'Ajay', age:21, bio: 'Software Engineer'},
    {name:'Gopi', age:22, bio: 'Software Developer'},
    {name:'Elan', age:23, bio: 'QA'},
    {name:'Gopu', age:24},
  ]

  const showBio = (bio) => {
    alert(bio)
  }

  return (
    <>

      <div>
        <h1>User Profile</h1>
      </div>

      {users.map((ele) => <UserProfile  each={ele} fn={showBio} />)} {/**/}
      
    </>
  )
}

export default App
