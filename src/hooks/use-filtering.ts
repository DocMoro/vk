import { FormEvent, useCallback } from 'react'
import type { NavigateOptions } from 'react-router-dom'

import { KEY_QUERY } from '../shared/constants/var'

export type TFilters = {
  genres: string[]
}

export const useResourceFiltering = (
  query: URLSearchParams,
  setQuery: (newQuery: URLSearchParams, options: NavigateOptions) => void
) => {
  const handleGenderClick = useCallback(
    (name: string, checked: boolean) => {
      if (checked) {
        query.append(KEY_QUERY.GENRES, name)
      } else {
        query.delete(KEY_QUERY.GENRES, name)
      }
    },
    [query]
  )

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      query.set('page', '1')
      setQuery(query, { replace: true })
    },
    [query]
  )

  return {
    handleGenderClick,
    handleSubmit
  }
}
