import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }} >

      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("red")}>
          Red
        </button>
        <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("yellow")}>
          Yellow
        </button>
        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("green")}>
          Green
        </button>
        <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("pink")}>
          Pink
        </button>
        <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => setColor("purple")}>
          Purple
        </button>



       </div>


    </>
  )
}

export default App
  