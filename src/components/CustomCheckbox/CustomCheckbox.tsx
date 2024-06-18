import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import s from './CustomCheckbox.module.css'

type CustomCheckboxProps = {
  cbClick: (name: string, checkbox: boolean) => void
  searchParams: URLSearchParams
  name: string
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ name, searchParams, cbClick }) => {
  const [state, setState] = useState(searchParams.has('genres.name', name))

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
