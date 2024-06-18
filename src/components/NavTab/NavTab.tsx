import './NavTab.scss'

import { NavLink } from 'react-router-dom'

import { path, START_PARAMS } from '../../shared/constants/var'

export default function NavTab() {
  return (
    <nav className="nav-tab">
      <NavLink to={`${path.movies}?${START_PARAMS}`} className="nav-tab__link link">
        Главная
      </NavLink>
      <NavLink to={path.favorites} className="nav-tab__link nav-tab__link_green link">
        Избранное
      </NavLink>
    </nav>
  )
}
