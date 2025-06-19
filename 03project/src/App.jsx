
import React from 'react';
import { useState } from 'react'

function addElement() {
  
}
function App() {
  
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <div>
      <h1>Students Dashboard</h1>
      <div className='flex flex-col w-1/2 mx-auto'>
        <label className='text-lg font-bold'>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-gray-300 p-2 rounded mb-4'
        />
        <label className='text-lg font-bold'>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className='border border-gray-300 p-2 rounded mb-4'
        />
        <button
          onClick={addElement}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
        </div>
    </div>
  )
}

export default App;
