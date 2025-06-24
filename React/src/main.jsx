import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './comp/header.jsx'
import Home from './comp/home.jsx'
import Footer from './comp/footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './router.jsx'
import About from './comp/aboutUs.jsx'
import Contact from './comp/contactUs.jsx'  

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path : "",
        element:<Home/>
      },
      
      {
        path : "header",
        element:<Header/>
      },
      {
        path : "footer",
        element:<Footer/>
      }

      ,
      {
        path : "aboutUs",
        element:<About/>
      }
      ,{
        path: "contactUs",
        element:<Contact/>
      }
      
    ]
      
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </ RouterProvider>
    
  </StrictMode>,
)
