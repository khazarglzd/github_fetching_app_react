import React from 'react'
import Logo from './components/Logo'
import Users from './routes/Users'
import { Routes, Route } from "react-router-dom"
import UserInfo from './routes/UserInfo'


const App = () => {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="container text-gray-900 py-3">
        <Logo />
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/:name' element={<UserInfo />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App