import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function RatingSpan(props){
    
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
        
      // other logic
    }
    return(
    <Rating>
        initialValue:{props.rating} 
    </Rating>

    )
}
export default RatingSpan