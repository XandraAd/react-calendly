/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Individuals from '../pages/Individuals'
import Teams from '../pages/Teams'
import Enterprise from '../pages/Enterprise'
import Contact from '../pages/Contact'

const Routing = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/individuals" element={<Individuals/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/enterprise" element={<Enterprise/>}/>
        
    </Routes>
    
  )
}

export default Routing