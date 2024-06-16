import { FC } from 'react'

import { MoviesList } from '../../components/MoviesList'
import { moviesTestData } from '../../shared/constants/var'

const moviesTestWithFavorites = moviesTestData.docs.slice(0, 50).map(movie => {
  return {
    ...movie,
    isFavorite: false
  }
})

const MainPage: FC = () => {
  return <MoviesList movies={moviesTestWithFavorites} />
}

export default MainPage
