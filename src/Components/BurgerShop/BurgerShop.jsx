import '../../styles/burger.css'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'
import { ingredients } from '../../data/burger-data'
import { useState } from 'react'

const BurgerShop = () => {
  const [stack, setStack] = useState([])
  console.log(ingredients)

  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} />
        <BurgerStack stack={stack} />
      </section>
    </div>
  )
}

export default BurgerShop