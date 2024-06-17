import { useCallback, useMemo, useState } from 'react'

import { TCustomCheckbox } from '../shared/constants/type'
import { GENRES } from '../shared/constants/var'

export type TFilters = {
  genres: TCustomCheckbox[]
}

type useResourceFilteringProps = {
  genres: string[]
}

export const useResourceFiltering = (query: useResourceFilteringProps) => {
  const [filters, setFilters] = useState<TFilters>({
    genres: GENRES.map(genre => {
      return {
        name: genre,
        checked: query.genres.includes(genre)
      }
    })
  })

  const urlQuery = useMemo(() => {
    let str = ''

    const { genres } = filters
    const activeGenres = genres.filter(genre => genre.checked)
    const genresNames = activeGenres.map((genre: TCustomCheckbox) => genre.name)
    const queryGenres = genresNames.length !== 0 ? `&genres.name=${genresNames.join('&genres.name=')}` : ''
    str += queryGenres

    return str
  }, [filters])

  const handleGenderClick = useCallback(
    (name: string, checked: boolean) => {
      const { genres } = filters
      const newGenres = genres.map(genre => {
        if (genre.name === name) {
          return {
            name,
            checked
          }
        }
        return genre
      })
      setFilters({
        ...filters,
        genres: newGenres
      })
    },
    [filters]
  )

  return {
    urlQuery,
    filters,
    handleGenderClick
  }
}
