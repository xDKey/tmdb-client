import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Movie, State } from '../type'

const MovieCard = ({ movie }: { movie: Movie }) => {
  const genresList = useSelector((state: State) => state.genresList)

  const renderedGenres = movie.genres.map((genre: number) => (
    <li key={genre}>{genresList[genre]}</li>
  ))

  return (
    <StyledMovieCard>
      <Poster src={movie.poster} />
      <TitleWrapper>
        <h1>{movie.title}</h1>
        <h4>({movie.originalTitle})</h4>
        <p>{movie.overview}</p>
      </TitleWrapper>
      <DetailWrapper>
        <p>Дата выхода: {movie.releaseDate}</p>
        Жанр:
        <Genres>{renderedGenres}</Genres>
        <p>
          Рейтинг: {movie.voteAverage} ({movie.voteCount})
        </p>
      </DetailWrapper>
    </StyledMovieCard>
  )
}

const StyledMovieCard = styled.section`
  display: flex;

  padding: 15px;

  box-shadow: 2px 2px 5px black;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  padding-right: 30px;
  padding-left: 30px;
  h1 {
    margin: 0;
    text-align: center;
  }
  h4 {
    text-align: center;
  }
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
`

const Poster = styled.img`
  width: 200px;
`

const Genres = styled.ul`
  text-transform: capitalize;
  list-style-position: inside;
`

export default MovieCard
