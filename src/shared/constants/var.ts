export enum path {
  favorites = '/favorites',
  movie = '/movie',
  movieId = '/movie/:id',
  movies = '/movies'
}
export enum apiPath {
  base = 'https://api.kinopoisk.dev/v1.4/',
  movie = 'movie'
}
export enum KEY_QUERY {
  GENRES = 'genres.name',
  RATING = 'rating.kp',
  YEAR = 'year'
}
export const TOKEN_API = '0CSKXBW-1W1M09Z-GAPJRHQ-ZXHJD88'
export const LIMIT = 50
export const PAGINATION_STEP = 5
export const KEY_LOCALDB_FAVORITES = 'favorites'
export const baseInfo = {
  total: 0,
  page: 1,
  pages: 0,
  limit: LIMIT
}
export const START_PARAMS = `page=1&limit=${LIMIT}`
export const notNullFields =
  '&notNullFields=name&notNullFields=id&notNullFields=year&notNullFields=rating.kp&notNullFields=poster.url'
export const GENRES = ['комедия', 'мелодрама', 'ужасы', 'драма']
