import React from 'react'
import styled from 'styled-components'
import { Movie } from '../type'
import { getGenres } from '../utils'

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <StyledMovieCard>
      <TitleWrapper>
        <Title>{movie.title}</Title>
        <OriginalTitle>({movie.originalTitle})</OriginalTitle>
        <Poster src={movie.poster} />
      </TitleWrapper>
      <p>{movie.overview}</p>
      <DetailWrapper>
        <p>Жанр: {}</p>
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

  margin-right: 30px;

  width: 300px;
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
`

const Poster = styled.img`
  width: 200px;
`

const Title = styled.h1`
  margin: 0;
  text-align: center;
`

const OriginalTitle = styled.h4`
  text-align: center;
`

export default MovieCard
