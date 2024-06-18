import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import s from './CustomCheckbox.module.css'

type CustomCheckboxProps = {
  cbClick: (name: string, checkbox: boolean) => void
  searchParams: URLSearchParams
  name: string
  keyQuery: string
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ name, searchParams, keyQuery, cbClick }) => {
  const [state, setState] = useState(searchParams.has(keyQuery, name))

  const handleClick = () => {
    setState(!state)
  }

  useEffect(() => {
    cbClick(name, state)
  }, [state])

  return (
    <label className={clsx(s.label, s.CustomCheckIcon)}>
      <input type="checkbox" checked={state} name={name} onChange={handleClick} />
      {name}
    </label>
  )
}

export default CustomCheckbox
