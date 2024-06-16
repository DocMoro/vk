import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Star, StarOutline } from '../../shared/assets/icons'
import { IMovieWithFavoriteState } from '../../shared/constants/type'
import { path } from '../../shared/constants/var'
import { checkDataValidity } from '../../shared/utils/pureFunc'
import s from './MovieCard.module.scss'

type MovieCardProps = {
  movie: IMovieWithFavoriteState
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { poster, name, year, rating, id, isFavorite } = movie

  const renderPoster = checkDataValidity(poster?.previewUrl)
  const renderName = checkDataValidity(name)
  const renderYear = checkDataValidity(year)
  const renderRating = checkDataValidity(rating.kp)

  return (
    <li className={s.card}>
      <Link className={s.card__link} to={`${path.movie}${id}`}>
        <img alt={renderName} className={s.card__image} src={renderPoster} />
      </Link>
      <h3 className={s.card__title}>{renderName}</h3>
      <p className={s.card__text}>{renderYear}</p>
      <p className={s.card__text}>{renderRating}</p>
      <button
        className={clsx(s.card__button, s.button)}
        onClick={() => {}}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        type={'button'}
      >
        {isFavorite ? <Star className={s.card__icon} /> : <StarOutline className={s.card__icon} />}
      </button>
    </li>
  )
}
