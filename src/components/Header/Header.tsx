import './Header.scss'

import { Link } from 'react-router-dom'

import { Logo } from '../../shared/assets/icons'
import NavTab from '../NavTab/NavTab'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">
        <Logo className="header__logo logo" />
      </Link>
      <NavTab />
    </header>
  )
}

export default Header
