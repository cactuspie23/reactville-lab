import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route to='/burgers' element={<BurgerShop />} />
        </Routes>
        <Landing />
      </main>
    
    </>
  )
}

export default App