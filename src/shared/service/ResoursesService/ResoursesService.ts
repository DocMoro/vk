import { AxiosError } from 'axios'

import { IMovie, IResMovies, TResError } from '../../constants/type'
import { apiPath } from '../../constants/var'
import { Result, ServicePrototype } from '../ServicePrototype'
import api from './ResoursesAxios'

export default class ResourcesService extends ServicePrototype {
  static async getMoviesPage(query: string) {
    const result: Result<IResMovies> = {
      hasError: false,
      errorMessage: '',
      data: null
    }

    try {
      const response = await api.get<IResMovies>(`${apiPath.movie}${query}`)
      const resMovies = response.data
      result.data = resMovies
    } catch (error) {
      const err = error as AxiosError<TResError>
      this._handlerError(result, err)
    }

    return result
  }

  static async getMovieById(id: string) {
    const result: Result<IMovie> = {
      hasError: false,
      errorMessage: '',
      data: null
    }

    try {
      const response = await api.get<IMovie>(`${apiPath.movie}/${id}`)
      const resMovies = response.data
      result.data = resMovies
    } catch (error) {
      const err = error as AxiosError<TResError>
      this._handlerError(result, err)
    }

    return result
  }

  static async getMoviesByIDs(IDs: string) {
    const result: Result<IResMovies> = {
      hasError: false,
      errorMessage: '',
      data: null
    }

    try {
      const response = await api.get<IResMovies>(`${apiPath.movie}?id=${IDs}`)
      const resMovies = response.data
      result.data = resMovies
    } catch (error) {
      const err = error as AxiosError<TResError>
      this._handlerError(result, err)
    }

    return result
  }
}
