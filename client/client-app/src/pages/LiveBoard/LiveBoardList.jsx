import React from 'react'
import LiveBoardListContainer from '../../containers/LiveBoard/LiveBoardListContainer'
import RecommendContainer from '../../containers/LiveBoard/RecommendContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ImgSlider from '../../containers/LiveBoard/ImgSlider'
import './css/cardList.css'
const LiveBoardList = () => {
  return (
    <div id="LiveBoardList">
      <Header />
      <ImgSlider />
      <LiveBoardListContainer />
      <RecommendContainer />
      <Footer />
    </div>
  )
}
export default LiveBoardList