import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [daytime, setDaytime] = useState(true)
  const [cash, setCash] = useState(100)
  console.log(cash)
  
  const handleExchange = amt => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <>
      <Nav cash={cash} setCash={setCash} setDaytime={setDaytime} />
      <main>
        <Routes>
          <Route path='/' element={<Landing daytime={daytime} />} />
          <Route path='/burgers' element={<BurgerShop />} />
          <Route path='/market' element={<SuperMarket handleExchange={handleExchange} />} />
        </Routes>
      </main>
    
    </>
  )
}

export default App