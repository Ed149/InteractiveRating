import React, { useState } from 'react'

export const Rating = ({getRating}) => {
    let rating = [1, 2, 3, 4, 5]
    const [active,setActive] = useState(-1);

    const handleActive = (e) =>{    
        console.log("HandleActive")
        console.log(e);
        setActive(e.target.id);
        getRating(parseInt(e.target.textContent));
    }


    return (
        <ul className='rating'>
            {
                rating.map((element,i) => {
                    return (<li key={i} id={i} onClick={handleActive} className={`rating__element round ${active == i ? "active" : ""}`}>{element}</li>)
                })

            }
        </ul>
    )
}
