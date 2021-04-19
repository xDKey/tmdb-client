import React from 'react'
import styled from 'styled-components'
import Search from './Search'

const Header = () => {
  return (
    <StyledHeader>
      <Search />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 10px;
  padding: 20px;
  margin-bottom: 10px;

  background-color: rgba(0, 0, 0, 0.5);
`

export default Header
