import { useState ,useCallback,useRef,useEffect} from 'react'

import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [symbolAllowed,setSymbolAllowed] = useState(false);
  const [Password,setPassword] = useState('');
  //ref hook
  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(Password);
    alert("Password copied to clipboard");
  },[Password]);
  const passwordGenrator= useCallback(()=>{

    let pass="";
    let str=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(symbolAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?~";

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length)+1;
      pass+=str.charAt(char);

    }
    setPassword(pass)
  },[length,numberAllowed,symbolAllowed,setPassword]);
  useEffect(()=>{
    passwordGenrator();
  },[length,numberAllowed,symbolAllowed,passwordGenrator]);
  return (
    <>
      <h1 className='text-4xl text-center'>Password Genrator</h1><br/>
      <div className='flex justify-center  shadow rounded-lg  mb-4' >
        


        <input style={{width:'500px'}} className='border-2 border-gray-300 rounded-lg m-2 p-2 ' type='text'  onChange={(e)=>setLength(e.target.value)} value={Password} ref={passwordRef}
          onClick={copyPasswordToClipBoard}
        />
        
        
        <button className='bg-blue-500 text-white rounded-lg m-5 p-3 hover:bg-blue-700' >Copy</button><br/>
        


        
        
        
      </div><br/>
      <div className='flex justify-center text-sm gap-x-2'>
           <div className='flex items-center gap-x-1'>
            <input  type='range'min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>

      </div>
          
      </div>
      {/*checkbox for number and symbol allowed and number */}
      <div className='flex justify-center gap-x-2 mt-4'>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' checked={numberAllowed} onChange={(e)=>setNumberAllowed(e.target.checked)} />
          <label>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' checked={symbolAllowed} onChange={(e)=>setSymbolAllowed(e.target.checked)} />
          <label>Include Symbols</label>
        </div>
      </div>
      {/*button to generate password*/}
      <div className='flex justify-center mt-4'>
        <button className='bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-700' onClick={passwordGenrator}>Generate Password</button>
      </div>

    </>
  )
}

export default App
