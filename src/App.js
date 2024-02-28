import React from 'react'
import Logo from './components/Logo'
import Users from './routes/Users'
import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className='container mx-auto text-gray-900 py-3'>
        <Logo />
        <Routes>
          <Route path='/' element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App