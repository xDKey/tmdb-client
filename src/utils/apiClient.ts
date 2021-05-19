import { Movie, RawMovie } from '../type'

const dateFormatting = (date: string): string =>
  date.replace(/(\d+)-(\d+)-(\d+)/, `$3.$2.$1`) // yyyy-mm-dd -> dd.mm.yyyy

export class apiClient {
  constructor(
    private baseUrl = 'https://api.themoviedb.org/3/',
    private apikey = '?api_key=314e6dde9895e914a26e321ea921a444',
    private language = '&language=ru-RU',
    private posterPath = 'https://image.tmdb.org/t/p/w500'
  ) {}

  private movieFormating = ({
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
    poster: this.posterPath + poster_path,
    voteAverage: vote_average,
    voteCount: vote_count,
    releaseDate: release_date ? dateFormatting(release_date) : 'none',
    genres: genre_ids,
  })

  private getResource = async (url: string) => {
    return await fetch(url)
      .then((data) => data.json())
      .catch(() => console.log('some'))
  }

  public getGenres = async () => {
    const url = this.baseUrl + 'genre/movie/list' + this.apikey + this.language
    const res = await this.getResource(url)
    return res.genres
  }

  public findMovie = async (id: number) => {
    const url = this.baseUrl + 'movie/' + id + this.apikey + this.language
    const res = await this.getResource(url)
    return this.movieFormating(res)
  }

  public discoverMovie = async () => {
    const url = this.baseUrl + 'discover/movie' + this.apikey + this.language
    const res = await this.getResource(url)
    const result = res.results.map((movie: RawMovie) =>
      this.movieFormating(movie)
    )
    return await result
  }

  public searchMovie = async (query: string) => {
    const url =
      this.baseUrl +
      'search/movie' +
      this.apikey +
      this.language +
      `&query=${query}`
    const res = await this.getResource(url)

    const result = res.results.map((movie: RawMovie) =>
      this.movieFormating(movie)
    )
    return await result
  }
}
