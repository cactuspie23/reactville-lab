import { ingredients } from "../../data/burger-data"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?  
        <>
        {props.stack.map(stack => 
            <li>
              {stack.name}
            </li>
          )}
        </> 
        : 
        <div>No ingredients</div>
      }
    </ul>
  )
}

export default BurgerStack