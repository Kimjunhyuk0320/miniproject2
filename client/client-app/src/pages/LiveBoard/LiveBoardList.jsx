import React from 'react'
import LiveBoardListContainer from '../../containers/LiveBoard/LiveBoardListContainer'
import RecommendContainer from '../../containers/LiveBoard/RecommendContainer'
import ImgSlider from '../../containers/LiveBoard/ImgSlider'

const LiveBoardList = () => {
  return (
    <div>
      <ImgSlider/>
      <LiveBoardListContainer/>
      <RecommendContainer/>
    </div>
  )
}

export default LiveBoardList