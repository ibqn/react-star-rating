import { useMemo } from 'react'
import PropTypes from 'prop-types'
import StarIcon from './star-icon'

const RatingIcon = (props) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props

  const fill = useMemo(() => {
    if (hoverRating >= index || (!hoverRating && rating >= index)) {
      return 'yellow'
    }
    return 'none'
  }, [rating, hoverRating, index])

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  )
}

RatingIcon.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired,
}

export default RatingIcon
