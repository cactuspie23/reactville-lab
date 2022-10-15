// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'>
        <img src={Logo} alt="logo" />
      </NavLink>
      <NavLink to='/burgers'>
        BURGER SHOP
      </NavLink>
      <Clock setDaytime={props.setDaytime} />
    </nav>
  )
}

export default Nav