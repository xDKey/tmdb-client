import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import Search from './Search'

const Header = () => {
  return (
    <StyledHeader>
      <Search />
      <Filter />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 10px;
  padding: 20px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;

  background-color: rgba(0, 0, 0, 0.5);
`

export default Header
