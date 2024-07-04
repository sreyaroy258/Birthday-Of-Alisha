import React from 'react'
import Header from './assets/component/Header'
import Body from './assets/component/Body'
import {  Routes, Route } from 'react-router-dom';
import Birthday from './assets/component/Birthday';




const App = () => {
  return (
   
    <div>
   
    


    <Routes >

    <Route path='/'  element={<Body />}  />
    <Route path='/birthday' element={<Birthday/>} />

    </Routes>
 
    </div>
   
  )
}

export default App