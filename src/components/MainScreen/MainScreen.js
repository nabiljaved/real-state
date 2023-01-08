import React from 'react'
import './Main.css'

import Navbar from '../../components/NavBar/Navbar';


export default function MainScreen() {


  return (
    <div>
        <Navbar/>
  
      <div className='main_container' >
        <h1 className='main_heading'>WELCOME TO CRAFT PROPERTY MANAGEMENT</h1>
        <div className='option_container'>
            <div className='options option1'>
              <h1>Property</h1>
              <div className='option_backdrop'></div>
            </div>
            <div className='options option2'>
            <h1>Contracts</h1>
              <div className='option_backdrop'></div>
            </div>
            <div className='options option3'>
            <h1>Rooms</h1>
              <div className='option_backdrop'></div>
            </div>
        </div>
      </div>
    </div>
    
  )
}
