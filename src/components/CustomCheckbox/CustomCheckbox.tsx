import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import { TCustomCheckbox } from '../../shared/constants/type'
import s from './CustomCheckbox.module.css'

type CustomCheckboxProps = {
  cbClick: (name: string, checkbox: boolean) => void
  genre: TCustomCheckbox
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ genre, cbClick }) => {
  const { name, checked } = genre
  const [state, setState] = useState(checked)

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
