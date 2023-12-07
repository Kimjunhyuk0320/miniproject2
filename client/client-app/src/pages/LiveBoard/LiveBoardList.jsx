import React from 'react'
import LiveBoardListContainer from '../../containers/LiveBoard/LiveBoardListContainer'
import RecommendContainer from '../../containers/LiveBoard/RecommendContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/cardList.css';
import ImgSliderContainer from '../../containers/LiveBoard/ImgSliderContainer';
const LiveBoardList = () => {
  return (
    <>
      <Header />
      <ImgSliderContainer />
      <div className="LiveBoardList">
        <LiveBoardListContainer />
      </div>
      <RecommendContainer />
      <Footer />
    </>
  )
}
export default LiveBoardList