import React, { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from "./components/Header"
import FeedbackData from './data/Feebackdata'

function App() {
  // Pull in the data from the data file.
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
