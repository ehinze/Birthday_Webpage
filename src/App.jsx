import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import All from './All';

function App() {
 

  return (
    <>
     <Routes>
     <Route path="/"  element={<All/>}/>
      </Routes> 
    </>
  )
}

export default App
