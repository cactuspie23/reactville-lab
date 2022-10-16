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

  return (
    <>
      <Nav setDaytime={setDaytime} />
      <main>
        <Routes>
          <Route path='/' element={<Landing daytime={daytime} />} />
          <Route path='/burgers' element={<BurgerShop />} />
          <Route path='/market' element={<SuperMarket />} />
        </Routes>
      </main>
    
    </>
  )
}

export default App