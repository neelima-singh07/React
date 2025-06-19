
import React from 'react';
import {browserRouter} from 'react-router-dom';
import {About, Contact, Experience,Feedbacks,Hero,Navbar,Tech,Works,StarCanvas} from './components';


function App() {
  

  return (
    <>
    <browserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <StarCanvas />
          <Contact />
        </div> 

      </div>

    </ browserRouter>
      
    </>
  )
}

export default App
