import '../../styles/super-market.css'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  console.log('Imported product data:::', products)
  return (
    <div className="super-market">
      <section>
        MarketNav component here
        DisplayProducts component here
      </section>

      Cart component here

    </div>
  )
}

export default SuperMarket