import { Fragment } from 'react'
import GlobalStyles from './components/global-styles'
import StarRating from './components/star-rating'

const App = () => {
  return (
    <Fragment>
      <div>Star rating</div>
      <StarRating />
      <GlobalStyles />
    </Fragment>
  )
}

export default App
