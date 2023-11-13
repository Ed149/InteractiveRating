import React, { useState } from 'react'
import { Rating } from './Rating'

export const Card = ({handleSubmit}) => {
  const [rating, setRating] = useState(0);

  const getRating = (rating) =>{
    setRating(rating);
  }

  return (
    <form className='card' onSubmit={()=>handleSubmit(rating)}>
        <div className='card__icon_star round'></div>

        <section className='card__info'>
            <h3>How did we do?</h3>
            <p> Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering! </p>
        </section>

        <Rating 
            getRating = {getRating}
        />
        <button type="submit" className='btn'>SUBMIT</button>
    </form>
  )
}
