import { FC, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Star, StarOutline } from '../../shared/assets/icons'
import { IMovieWithFavoriteState } from '../../shared/constants/type'
import { path } from '../../shared/constants/var'
import { checkDataValidity } from '../../shared/utils/pureFunc'
import { FavoritesContext } from '../../store/favoritesSlice'
import s from './MovieCard.module.css'

type MovieCardProps = {
  movie: IMovieWithFavoriteState
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { poster, name, year, rating, id } = movie
  const favorites = useContext(FavoritesContext)
  const [isFavorite, setIsFavorite] = useState(movie.isFavorite)

  const handleButtonClick = () => {
    const strId = id.toString()
    if (isFavorite) {
      favorites.deleteFavoriteId(strId)
      setIsFavorite(false)
    } else {
      favorites.addFavoriteId(strId)
      setIsFavorite(true)
    }
  }

  const renderPoster = checkDataValidity(poster?.previewUrl)
  const renderName = checkDataValidity(name)
  const renderYear = checkDataValidity(year)
  const renderRating = checkDataValidity(rating.kp)

  return (
    <li className={s.Card}>
      <Link className={s.Link} to={`${path.movie}/${id}`}>
        <img alt={renderName} className={s.Image} src={renderPoster} />
      </Link>
      <div>
        <h3 className={s.Title}>{renderName}</h3>
        <p className={s.Text}>{renderYear}</p>
        <p className={s.Text}>{renderRating}</p>
        <button
          className={s.Button}
          onClick={handleButtonClick}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          type={'button'}
        >
          {isFavorite ? (
            <Star fill={'#1a73e8'} className={s.Icon} />
          ) : (
            <StarOutline fill={'#1a73e8'} className={s.Icon} />
          )}
        </button>
      </div>
    </li>
  )
}
