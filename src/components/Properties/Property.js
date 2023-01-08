import React from 'react'
import Navbar from '../NavBar/Navbar'
import Rentals from '../Rentals'

export default function Property({text}) {
  return (
    <>
    <Navbar/>
    <Rentals text={text}/>
    </>
  )
}
