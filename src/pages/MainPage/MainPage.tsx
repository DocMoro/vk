import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormOfFiltration from '../../components/FormOfFiltration/FormOfFiltration'
import { MoviesList } from '../../components/MoviesList'
import { Pagination } from '../../components/Pagination'
import { useResourceFiltering } from '../../hooks/use-filtering'
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
  const { urlQuery, filters, handleGenderClick } = useResourceFiltering({
    genres: query.getAll('genre.name')
  })

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      navigate(`/movies/?page=${nextPage}&limit=${LIMIT}${urlQuery}`)
    },
    [navigate, urlQuery]
  )

  const setDataMovies = useCallback(async () => {
    const queryPage = query.get('page')
    if (!queryPage) return
    const { data, errorMessage, hasError } = await ResourcesService.getMoviesPage(
      `?page=${queryPage}&limit=${LIMIT}${urlQuery}`
    )
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
  }, [query, urlQuery])

  useEffect(() => {
    setDataMovies()
  }, [setDataMovies])

  useEffect(() => {
    setAnotherPage(1)
  }, [setAnotherPage])

  return (
    <>
      <FormOfFiltration genres={filters.genres} cbClick={handleGenderClick} />
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
