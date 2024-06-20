import clsx from 'clsx'
import { FC, FormEvent } from 'react'

import { GENRES, KEY_QUERY } from '../../shared/constants/var'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import RangeInput from '../RangeInput/DoubleScrollBar'
import s from './FormOfFiltration.module.css'

type FormOfFiltrationProps = {
  cbChangeGenres: (name: string, checkbox: boolean) => void
  cbSubmit: (e: FormEvent) => void
  searchParams: URLSearchParams
  className?: string
}

const currYear = new Date().getFullYear()

export const FormOfFiltration: FC<FormOfFiltrationProps> = ({ searchParams, cbChangeGenres, cbSubmit, className }) => {
  return (
    <form className={clsx(s.Form, className && className)} onSubmit={cbSubmit}>
      <ul className={s.List}>
        {GENRES.map(genre => (
          <li key={genre}>
            <CustomCheckbox
              name={genre}
              searchParams={searchParams}
              keyQuery={KEY_QUERY.GENRES}
              cbClick={cbChangeGenres}
            />
          </li>
        ))}
      </ul>
      <RangeInput
        name="ratings"
        query={searchParams}
        keyQuery={KEY_QUERY.RATING}
        min={1}
        max={10}
        step={0.1}
        len={10}
      />
      <RangeInput
        name="years"
        query={searchParams}
        keyQuery={KEY_QUERY.YEAR}
        min={1990}
        max={currYear}
        step={1}
        len={11}
      />
      <button className={s.Button} type="submit">
        Поиск
      </button>
    </form>
  )
}
