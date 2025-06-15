import React, { useState,useEffect } from 'react';


function App() {
  
  const [counter,setCounter]=useState(5);
  const AddValue=()=>{
    //counter++;
    //console.log(counter);
    setCounter(counter+1);

  }
  const SubtractValue=()=>{
    //counter--;
    //console.log(counter);
    if(counter==0){
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter-1);
    
  }
  const RemoveValue=()=>{
    //counter=0;
    //console.log(counter);
    setCounter(0);

  }

  
  return (
    <div>
      <h1>Hello Neelima!</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={AddValue}>Increase</ button><br/><br/>
      <button onClick={SubtractValue}>Decrease</ button><br/><br/>
      <button>counter:{counter}</button><br/><br/>
      <button onClick={RemoveValue}>Reset</button>

    </div>
    
  );
}

export default App;
