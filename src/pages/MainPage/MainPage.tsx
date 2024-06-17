import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MoviesList } from '../../components/MoviesList'
import { Pagination } from '../../components/Pagination'
import { useQuery } from '../../hooks/use-query'
import { IMovieWithFavoriteState, IResInfo } from '../../shared/constants/type'
import { baseInfo, LIMIT, PAGINATION_STEP } from '../../shared/constants/var'
import ResourcesService from '../../shared/service/ResoursesService/ResoursesService'
import { FavoritesContext } from '../../store/favoritesSlice'

const MainPage: FC = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const favorites = useContext(FavoritesContext)
  const [movies, setMovies] = useState<IMovieWithFavoriteState[]>([])
  const [paginationInfo, setPaginationInfo] = useState<IResInfo>(baseInfo)

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`/movies/?page=${nextPage}&limit=${LIMIT}`)
    },
    [navigate]
  )

  const setDataMovies = useCallback(async () => {
    if (query.toString() === '') return
    const { data, errorMessage, hasError } = await ResourcesService.getMoviesPage(query.toString())
    if (hasError) {
      console.log(errorMessage)
      return
    }
    if (!data) {
      return
    }
    const { docs, total, page, pages, limit } = data
    setPaginationInfo({
      total,
      page,
      pages,
      limit
    })
    const moviesDataWithIsFavorite = docs.map(movie => {
      return {
        ...movie,
        isFavorite: favorites.checkIsFavorite(movie.id.toString())
      }
    })
    setMovies(moviesDataWithIsFavorite)
  }, [query])

  useEffect(() => {
    setDataMovies()
  }, [setDataMovies])

  useEffect(() => {
    setAnotherPage(1)
  }, [setAnotherPage])

  return (
    <>
      <MoviesList movies={movies} />
      <Pagination
        pageSize={paginationInfo.limit}
        currentPage={paginationInfo.page}
        stepValue={PAGINATION_STEP}
        totalCount={paginationInfo.total}
        onPageChange={setAnotherPage}
      />
    </>
  )
}

export default MainPage
