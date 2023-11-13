import { useState } from 'react'
import '/src/App.css'
import { Card } from '/src/components/Card'
import { CardSubmitted } from '/src/components/CardSubmitted'


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating,setRating] = useState(0);

  const handleSubmit = (rating) =>{
    setIsSubmitted(!isSubmitted);
    setRating(rating);
  }

  // const handleRating = (rating) 

  return (
    <div className="wrapper">
      { isSubmitted ? <CardSubmitted handleSubmit={handleSubmit} rating={rating}/> : <Card handleSubmit={handleSubmit}/> }

    </div>
  )
}

export default App;
