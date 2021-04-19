import { fetchGenres } from './store/reducer'
import { Movie, RawMovie } from './type'

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/'
const apikey = '?api_key=314e6dde9895e914a26e321ea921a444'
const language = '&language=ru-RU'
const posterPath = 'https://image.tmdb.org/t/p/w500'

const getResource = async (url: string) => {
  return await fetch(url).then((data) => data.json())
}

const movieFormating = ({
  id,
  title,
  original_title,
  overview,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
}: RawMovie): Movie => ({
  id,
  title,
  overview,
  originalTitle: original_title,
  poster: posterPath + poster_path,
  voteAverage: vote_average,
  voteCount: vote_count,
  releaseDate: release_date,
  genres: genre_ids,
})

export const findMovie = async (id: number) => {
  const url = baseUrl + 'movie/' + id + apikey + language
  const res = await getResource(url)
  return movieFormating(res)
}

export const discoverMovie = async () => {
  const url = baseUrl + 'discover/movie' + apikey + language
  const res = await getResource(url)
  const result = res.results.map((movie: RawMovie) => movieFormating(movie))
  return await result
}

export const getGenres = async () => {
  const url = baseUrl + 'genre/movie/list' + apikey + language
  const res = await getResource(url)

  const genresList: {[k: number]: string } = {};

  res.genres.forEach(({id, name}: {id: number, name: string}) => {genresList[id] = name})
  return genresList
}