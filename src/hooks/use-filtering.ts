import { FormEvent, useCallback } from 'react'
import type { NavigateOptions } from 'react-router-dom'

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
        query.append('genres.name', name)
      } else {
        query.delete('genres.name', name)
      }
    },
    [query]
  )

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      setQuery(query, { replace: true })
    },
    [query]
  )

  return {
    handleGenderClick,
    handleSubmit
  }
}
