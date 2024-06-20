import { Link } from 'react-router-dom'

import { Logo } from '../../shared/assets/icons'
import NavTab from '../NavTab/NavTab'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.Header}>
      <Link to="/" className={s.Link}>
        <Logo className={s.Logo} />
      </Link>
      <NavTab />
    </header>
  )
}

export default Header
