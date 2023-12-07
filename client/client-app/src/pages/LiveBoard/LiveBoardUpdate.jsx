import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardUpdateContainer from '../../containers/LiveBoard/LiveBoardUpdateContainer'
import './css/update.css'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';

const LiveBoardUpdate = () => {
  const { no } = useParams()
  return (
    <>
      <Header />
      <div className='LiveBoardUpdate'>
        <LiveBoardUpdateContainer no={no} />
      </div>
      <ActiveFooter/>
      <Footer />
    </>
  )
}

export default LiveBoardUpdate