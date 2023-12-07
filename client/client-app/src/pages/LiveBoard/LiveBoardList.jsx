import React from 'react'
import LiveBoardListContainer from '../../containers/LiveBoard/LiveBoardListContainer'

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/cardList.css';
import ImgSliderContainer from '../../containers/LiveBoard/ImgSliderContainer';
import Recommend from './Recommend';
const LiveBoardList = () => {
  return (
    <>
      <Header />
      <ImgSliderContainer />
      <div className="LiveBoardList">
        <LiveBoardListContainer />
      </div>
      <Recommend />
      <Footer />
    </>
  )
}
export default LiveBoardList