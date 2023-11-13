import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
import { CardSubmitted } from './components/CardSubmitted'


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

export default App
