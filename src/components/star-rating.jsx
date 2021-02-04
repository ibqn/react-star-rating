import { useState } from 'react'
import styled from 'styled-components'
import RatingIcon from './rating-icon'

const StyledDiv = styled.div`
  display: flex;
  width: 300px;

  h1 {
    font-size: 20px;
    margin: 0 0 1rem 0;
  }
`

const StarRating = () => {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const onMouseEnter = (index) => setHoverRating(index)
  const onMouseLeave = () => setHoverRating(0)
  const onSaveRating = (index) => setRating(index)

  return (
    <StyledDiv>
      {Array(5)
        .fill()
        .map((_, idx) => (
          <RatingIcon
            key={idx}
            index={idx + 1}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        ))}
    </StyledDiv>
  )
}

export default StarRating
