const Examples = () => {
  const title = 'Blog post'
  const body = 'This is my blog post'
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
    { id: 4, text: 'Comment 4' },
  ]

  const loading = false
  const showComments = true

  if (loading) return <h1>Loading...</h1>

  // You can put JSX inside a variable and then render it.
  const commentBlock = (
    <div className="comments">
      <h2>Comments</h2>
      <h3>There are {comments.length} comments</h3>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ol>
    </div>
  )

  return (
    <div className="container">
      {/* Vanilla js can be used inside JSX. */}
      <h1>{title.toUpprCase()}</h1>
      <p>{body}</p>

      {/* Any 'ole JS can go into JSX */}
      <div className="js">{Math.random() * (5 + 5)}</div>

      {/*
      Fancy way, shorthand for an if statement
      If show comments is true, render the block.
      */}
      {showComments && commentBlock}
    </div>
  )
}

export default Examples
