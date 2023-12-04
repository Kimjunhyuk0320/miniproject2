import React from 'react'
import LiveBoardListContainer from '../../containers/LiveBoard/LiveBoardListContainer'
import RecommendContainer from '../../containers/LiveBoard/RecommendContainer'
import ImgSlider from '../../containers/LiveBoard/ImgSlider'
import './css/cardList.css'
const LiveBoardList = () => {
  return (
    <div id="content">
      <ImgSlider/>
      <LiveBoardListContainer/>
      <RecommendContainer/>
    </div>
  )
}

export default LiveBoardList