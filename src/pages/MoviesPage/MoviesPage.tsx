import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import FormOfFiltration from '../../components/FormOfFiltration/FormOfFiltration'
import { MoviesList } from '../../components/MoviesList'
import { Pagination } from '../../components/Pagination'
import { useResourceFiltering } from '../../hooks/use-filtering'
import { IMovieWithFavoriteState, IResInfo } from '../../shared/constants/type'
import { baseInfo, notNullFields, PAGINATION_STEP } from '../../shared/constants/var'
import ResourcesService from '../../shared/service/ResoursesService/ResoursesService'
import { FavoritesContext } from '../../store/favoritesSlice'
import s from './MoviesPage.module.css'

const MoviesPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const favorites = useContext(FavoritesContext)
  const [movies, setMovies] = useState<IMovieWithFavoriteState[]>([])
  const [paginationInfo, setPaginationInfo] = useState<IResInfo>(baseInfo)

  const { handleGenderClick, handleSubmit } = useResourceFiltering(searchParams, setSearchParams)

  const setAnotherPage = useCallback(
    (nextPage: number) => {
      searchParams.set('page', nextPage.toString())
      setSearchParams(searchParams, { replace: true })
    },
    [searchParams]
  )

  const setDataMovies = useCallback(async () => {
    const { data, errorMessage, hasError } = await ResourcesService.getMoviesPage(
      `?${searchParams.toString()}${notNullFields}`
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
  }, [searchParams])

  useEffect(() => {
    setDataMovies()
  }, [setDataMovies])

  return (
    <>
      <div className={s.MoviesContainer}>
        <FormOfFiltration
          className={s.FormPosition}
          searchParams={searchParams}
          cbChangeGenres={handleGenderClick}
          cbSubmit={handleSubmit}
        />
        <MoviesList movies={movies} className={s.List} />
      </div>
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

export default MoviesPage
