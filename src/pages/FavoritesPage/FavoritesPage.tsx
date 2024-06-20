import { FC, useCallback, useContext, useEffect, useState } from 'react'

import { MoviesList } from '../../components/MoviesList'
import { IMovieWithFavoriteState } from '../../shared/constants/type'
import ResourcesService from '../../shared/service/ResoursesService/ResoursesService'
import { FavoritesContext } from '../../store/favoritesSlice'

const FavoritesPage: FC = () => {
  const favorites = useContext(FavoritesContext)
  const [movies, setMovies] = useState<IMovieWithFavoriteState[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const setDataMovies = useCallback(async () => {
    const queryIDs = favorites.getFavoritesIDs().join('&id=')
    const { data, errorMessage, hasError } = await ResourcesService.getMoviesByIDs(queryIDs)
    setIsLoading(false)
    if (hasError) {
      console.log(errorMessage)
      return
    }
    if (!data) {
      return
    }
    const { docs } = data
    const moviesDataWithIsFavorite = docs.map(movie => {
      return {
        ...movie,
        isFavorite: true
      }
    })
    setMovies(moviesDataWithIsFavorite)
  }, [])

  useEffect(() => {
    const newArr = movies.filter(movie => favorites.checkIsFavorite(movie.id.toString()))
    setMovies(newArr)
  }, [favorites.favoritesIDs])

  useEffect(() => {
    setDataMovies()
  }, [setDataMovies])

  return (
    <main>
      <MoviesList movies={movies} />
      {isLoading && <li>...Loading</li>}
    </main>
  )
}

export default FavoritesPage
