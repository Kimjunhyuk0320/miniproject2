import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardUpdateContainer from '../../containers/LiveBoard/LiveBoardUpdateContainer'
import './css/update.css'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const LiveBoardUpdate = () => {
  const { no } = useParams()
  return (
    <>
      <Header />
      <div className='LiveBoardUpdate'>
        <LiveBoardUpdateContainer no={no} />
      </div>
      <Footer />
    </>
  )
}

export default LiveBoardUpdate