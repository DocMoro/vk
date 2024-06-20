import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import MovieProfile from '../../components/MovieProfile/MovieProfile'
import { IMovie } from '../../shared/constants/type'
import ResourcesService from '../../shared/service/ResoursesService/ResoursesService'

const MoviePage: FC = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<IMovie>()

  const setMovieData = async () => {
    if (!id) {
      return
    }
    const { data, hasError, errorMessage } = await ResourcesService.getMovieById(id)
    if (hasError) {
      console.log(errorMessage)
      return
    }
    if (data) {
      setMovie(data)
    }
  }

  useEffect(() => {
    setMovieData()
  }, [])

  if (!movie) {
    return <div></div>
  }

  return (
    <main>
      <MovieProfile movie={movie} />
    </main>
  )
}

export default MoviePage
