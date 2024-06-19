import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { path, START_PARAMS } from '../../shared/constants/var'
import s from './NavTab.module.scss'

export default function NavTab() {
  return (
    <nav className={s.NavTab}>
      <NavLink to={`${path.movies}?${START_PARAMS}`} className={clsx(s.NavTabLink)}>
        Главная
      </NavLink>
      <NavLink to={path.favorites} className={clsx(s.NavTabLink, s.NavTabLinkColorGreen)}>
        Избранное
      </NavLink>
    </nav>
  )
}
