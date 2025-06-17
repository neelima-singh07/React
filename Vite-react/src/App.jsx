import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentCard from './comp/card.jsx'
function App() {
  // const [count, setCount] = useState(0)
  
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
 
  
  
  function AddCard() {
    
  }
  return (
    <>

      {/* write made with love by neelima with heart icon */}
      <div>
        Made with <span role="img" aria-label="heart">❤️</span> by Neelima
      </div><br />
      <StudentCard></ StudentCard>
      {/*take input a make same cards from details  */}
      <input onChange={(e)=>{setName(e.target.value)} }type="text" placeholder='Enter Name'/>
      <input onChange={(e)=>{setAge(e.target.value)} }type="number" placeholder='Enter Age'/>
      <button>Add Student</button>
      

      

      





    </>
    )

  
  
  }

export default App
