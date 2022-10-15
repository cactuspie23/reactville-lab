import '../../styles/burger.css'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = ingredient => {
    setStack([ingredient, ...stack])
  }

  const removeFromBurger = idx => {
    setStack(stack.filter((ingredient, i)=> i !== idx))
  }

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={()=> setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} stack={stack} addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger} />
      </section>
    </div>
  )
}

export default BurgerShop