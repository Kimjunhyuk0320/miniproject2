import React from 'react'

const Image = ({liveBoard}) => {
  return (
    <div className='imgContainer'>
      {liveBoard.thumbnail != null && (
        <img src={`/api/file/img/${liveBoard.thumbnail.fileNo}`} alt="thumbnail" />
      )}
    </div>
  )
}

export default Image