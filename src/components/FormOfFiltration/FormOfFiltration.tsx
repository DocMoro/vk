import { FC } from 'react'

import { TCustomCheckbox } from '../../shared/constants/type'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'

type FormOfFiltrationProps = {
  genres: TCustomCheckbox[]
  cbClick: (name: string, checkbox: boolean) => void
}

const FormOfFiltration: FC<FormOfFiltrationProps> = ({ genres, cbClick }) => {
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.name}>
          <CustomCheckbox genre={genre} cbClick={cbClick} />
        </li>
      ))}
    </ul>
  )
}

export default FormOfFiltration
