import React from 'react'

const Content = ({liveBoard}) => {
  return (
    <div className='textContainer'>
      <p dangerouslySetInnerHTML={{ __html: liveBoard.content }}></p>
    </div>
  )
}

export default Content