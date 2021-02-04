import { Fragment } from 'react'
import styled from 'styled-components'
import GlobalStyles from './components/global-styles'
import StarRating from './components/star-rating'

const StyledDiv = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
  color: #4a4a4a;
  padding: 1.25rem;
`

const App = () => {
  return (
    <Fragment>
      <StyledDiv>
        <div>Star rating</div>
        <StarRating />
      </StyledDiv>
      <GlobalStyles />
    </Fragment>
  )
}

export default App
