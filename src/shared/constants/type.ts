type TExternalId = {
  kpHD: string | null
  imdb: string | null
  tmdb: number | null
}

type TName = {
  name: string
  language: string | null
  type: string | null
}

type TFact = {
  value: string
  type: string | null
  spoiler: boolean | null
}

type TRating = {
  kp: number | null
  imdb?: number | null
  tmdb?: number | null
  filmCritics: number | null
  russianFilmCritics: number | null
  await: number | null
}

type TLogo = {
  url: string | null
}

type TPoster = {
  url: string | null
  previewUrl: string | null
}

type TTrailer = {
  url: string | null
  name: string | null
  site: string | null
  size: number | null
  type: string | null
}

type TVideos = {
  trailers?: TTrailer[] | null
}

type TGenre = {
  name: string
}

type TCountrie = {
  name: string
}

type TPersonInMovie = {
  id: number
  photo: string | null
  name: string | null
  enName: string | null
  description: string | null
  profession: string | null
  enProfession: string | null
}

type TPreviewInfo = {
  count: number | null
  positiveCount: number | null
  percentage: string | null
}

type TSeasonInfo = {
  number: number | null
  episodesCount: number | null
}

type TCurrencyValue = {
  value: number | null
  currency: string | null
}

type TFees = {
  world: TCurrencyValue
  russia: TCurrencyValue
  usa: TCurrencyValue
}

type TPremiere = {
  country: string | null
  world: string | null
  russia: string | null
  digital: string | null
  cinema: string | null
  bluray: string | null
  dvd: string | null
}

type TLinkedMovie = {
  id: number
  name: string | null
  enName: string | null
  alternativeName: string | null
  type: string | null
  poster: TPoster | null
  rating: TRating | null
  year: number | null
}

type TWatchabilityItem = {
  name: string | null
  logo: TLogo
  url: string
}

type TNetworkItem = {
  name: string | null
  logo: TLogo | null
}

type TWatchability = {
  items: TWatchabilityItem[]
}

type TYearRange = {
  start: number | null
  end: number | null
}

type TAudience = {
  count: number | null
  country: string | null
}

interface IMovie {
  id: number
  externalId?: TExternalId | null
  name: string | null
  alternativeName: string | null
  enName?: string | null
  names?: TName[] | null
  type: string | null
  typeNumber: number | null
  year: number | null
  description: string | null
  shortDescription: string | null
  slogan?: string | null
  status: string | null
  facts?: TFact[] | null
  rating: TRating
  votes: TRating
  movieLength: number | null
  ratingMpaa: string | null
  ageRating: number | null
  logo?: TLogo
  poster?: TPoster
  backdrop?: TPoster
  videos?: TVideos
  genres?: TGenre[]
  countries?: TCountrie[]
  persons?: TPersonInMovie[]
  reviewInfo?: TPreviewInfo
  seasonsInfo?: TSeasonInfo[]
  budget?: TCurrencyValue
  fees?: TFees
  premiere?: TPremiere
  similarMovies?: TLinkedMovie[] | null
  sequelsAndPrequels?: TLinkedMovie[] | null
  watchability?: TWatchability
  releaseYears?: TYearRange[]
  top10: number | null
  top250: number | null
  ticketsOnSale: boolean | null
  totalSeriesLength: number | null
  seriesLength: number | null
  isSeries: boolean | null
  audience?: TAudience[] | null
  lists?: string[] | null
  networks?: TNetworkItem | null
  updatedAt?: string | null
  createdAt?: string | null
}

interface IMovieWithFavoriteState extends IMovie {
  isFavorite: boolean
}

export type { IMovie, IMovieWithFavoriteState }
