import clsx from 'clsx'
import { FC } from 'react'

import { IMovieWithFavoriteState } from '../../shared/constants/type'
import { MovieCard } from '../MovieCard/MovieCard'
import s from './MoviesList.module.css'

type MoviesListProps = {
  movies: IMovieWithFavoriteState[]
  className?: string
}

export const MoviesList: FC<MoviesListProps> = ({ movies, className }) => {
  return (
    <ul className={clsx(s.List, className && className)}>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  )
}
