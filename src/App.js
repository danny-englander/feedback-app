import React, { useState } from 'react'
// import Examples from "./components/Examples"
import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackData from './data/Feebackdata'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
