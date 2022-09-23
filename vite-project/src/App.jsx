import React from 'react'
import Nav from "./components/Nav"
import Colour from "./components/Colour"
import Footer from "./components/Footer"
import './App.css'
import data from '../../data'

function App() {
  const colours = data.map(colour => {
    return (
      <Colour 
        key={colour.id}
        {...colour}
      />
    )
  })
  
  return (
    <>
      <Nav />
        <div className='colours-container'>
          {colours}
        </div>
      <Footer />
    </>
  )
}

export default App
