import React, { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
import FeedbackData from './data/Feebackdata'

function App() {
  // Pull in the data from the data file.
  const [feedback, setFeedback] = useState(FeedbackData)

  // Custom function from FeedbackItem > button onClick
  // to delete the id being clicked on from the JSON array.
  const deleteFeedBack = (id) => {
    // Set a custom alert close message, (i.e. if yes)
    if (window.confirm('Are you sure you want to delete?')) {
      // This will delete an individual message clicking on a close icon.
      // .filter is a high order function like .map or a foreach loop.
      // item.id !== id means the item.id is not equal to the one being passed in marked for deletion.
      // Thus, it is a fancy way of keeping all ids except the one being clicked on.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      // For more info with regard to JS filter
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  )
}

export default App
