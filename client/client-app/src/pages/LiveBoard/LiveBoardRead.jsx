import React from 'react'
import { useParams } from 'react-router-dom'
import LiveBoardReadContainer from '../../containers/LiveBoard/LiveBoardReadContainer'
import CommentContainer from '../../containers/comment/CommentContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/read.css'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const LiveBoardRead = () => {
  const { no } = useParams()
  const parentTable = "live_board"


  return (
    <>
      <Header />
      <div className='LiveBoardRead'>
        <div className='totalContainer'>
          <LiveBoardReadContainer no={no} />
          <CommentContainer no={no} parentTable={parentTable} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LiveBoardRead