export type Movie = {
  id: number
  title: string
  originalTitle: string
  poster: string
  overview: string
  voteAverage: number
  voteCount: number
  releaseDate: string
  genres: Array<number>
}

export type RawMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type State = {
  genresList: { [id: number]: string },
  moviesList: Movie[]
}
