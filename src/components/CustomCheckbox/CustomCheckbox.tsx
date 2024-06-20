import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import s from './CustomCheckbox.module.css'

type CustomCheckboxProps = {
  cbClick: (name: string, checkbox: boolean) => void
  searchParams: URLSearchParams
  name: string
  keyQuery: string
  className?: string
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ name, searchParams, keyQuery, cbClick, className }) => {
  const [state, setState] = useState(searchParams.has(keyQuery, name))

  const handleClick = () => {
    const newState = !state
    cbClick(name, newState)
    setState(newState)
  }

  useEffect(() => {
    setState(searchParams.has(keyQuery, name))
  }, [searchParams, keyQuery, name])

  return (
    <label className={clsx(s.label, s.CustomCheckIcon, state && s.CustomCheckIconVisible, className && className)}>
      <input type="checkbox" name={name} onChange={handleClick} />
      <span className={s.Text}>{name}</span>
    </label>
  )
}

export default CustomCheckbox
