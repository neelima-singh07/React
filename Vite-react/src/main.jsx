
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './comp/card.jsx';



createRoot(document.getElementById('root')).render(
   
   <>
      
      <App />
      
      <StudentCard student="Jane Smith" age={22} />
      <StudentCard student="Alice Johnson" age={19} />
      
      

   </>

)
