import React from 'react'

export const CardSubmitted = ({rating}) => {
  return (
    <div className='card card__thank' >
        <div className='card__icon_mobile'></div>

        <h5>You selected {rating} out of 5</h5>

        <section className='card__info'>
            <h3>Thank you!</h3>
            <p className='card__info_p_thank'> We appreciate you taking the time to give a rating. 
                If you ever need more support, don’t hesitate to get in touch! </p>
        </section>
    </div>
  )
}
