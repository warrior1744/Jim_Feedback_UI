import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  let averageRating = feedback.reduce(
    (acc, cur) =>  acc + cur.rating , 0)/feedback.length

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '') //remove trailiing zero

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: { feedback.length === 0 ? 
                0 : averageRating
           }
        </h4>
    </div>
  )
}


export default FeedbackStats