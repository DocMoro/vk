import { FC, FormEvent } from 'react'

import { GENRES, KEY_QUERY } from '../../shared/constants/var'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import RangeInput from '../RangeInput/DoubleScrollBar'

type FormOfFiltrationProps = {
  cbChangeGenres: (name: string, checkbox: boolean) => void
  cbSubmit: (e: FormEvent) => void
  searchParams: URLSearchParams
}

const FormOfFiltration: FC<FormOfFiltrationProps> = ({ searchParams, cbChangeGenres, cbSubmit }) => {
  return (
    <form onSubmit={cbSubmit}>
      <ul>
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
      <RangeInput name="range" query={searchParams} keyQuery={KEY_QUERY.RATING} min={0} max={10} step={0.1} />
      <button type="submit">Поиск</button>
    </form>
  )
}

export default FormOfFiltration
