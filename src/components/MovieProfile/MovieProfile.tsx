import clsx from 'clsx'
import { FC } from 'react'

import { IMovie } from '../../shared/constants/type'
import { checkDataValidity } from '../../shared/utils/pureFunc'
import s from './MovieProfile.module.css'

type MovieProfile = {
  movie: IMovie
  className?: string
}

export const MovieProfile: FC<MovieProfile> = ({ movie, className }) => {
  const renderName = checkDataValidity(movie.name)
  const renderImg = checkDataValidity(movie.poster?.url)

  return (
    <section className={clsx(s.Section, className && className)}>
      <div className={s.ImageContainer}>
        <img alt={renderName} src={renderImg} className={s.Image} />
      </div>
      <h2 className={s.Title}>{renderName}</h2>
      <p className={s.Text}>{movie.description || '...'}</p>
      <ul className={s.List}>
        <li className={s.Cell}>
          <h4 className={s.SubTitle}>KP</h4>
          <p className={s.Text}>{movie.rating.kp || '#'}</p>
        </li>
        <li className={s.Cell}>
          <h4 className={s.SubTitle}>IMDB</h4>
          <p className={s.Text}>{movie.rating.imdb || '#'}</p>
        </li>
        <li className={s.Cell}>
          <h4 className={s.SubTitle}>TMDB</h4>
          <p className={s.Text}>{movie.rating.tmdb || '#'}</p>
        </li>
        <li className={s.Cell}>
          <h4 className={s.SubTitle}>FC</h4>
          <p className={s.Text}>{movie.rating.filmCritics || '#'}</p>
        </li>
      </ul>
      <div className={s.YearContainer}>
        <h3 className={s.SubTitle}>Год:</h3>
        <p className={s.Text}>{movie.year}г.</p>
      </div>
      <div className={s.GenresContainer}>
        <h3 className={s.SubTitle}>Жанры</h3>
        <ul className={s.List}>
          {movie.genres?.map((genre, index) => (
            <li key={index}>
              <p className={clsx(s.Text, s.GenreText)}>{genre.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
