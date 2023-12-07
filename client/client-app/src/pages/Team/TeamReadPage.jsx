import React from 'react'
import { useParams } from 'react-router-dom'
import TeamReadContainer from '../../containers/Team/TeamReadContainer'
import CommentContainer from '../../containers/comment/CommentContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/read.css'
const TeamReadPage = () => {
  const { teamNo } = useParams()
  const parentTable = 'team_recruitments'

  return (
    <>
      <div className='LiveBoardRead'>
        <Header />
        <div className='totalContainer'>
          <TeamReadContainer teamNo={teamNo}></TeamReadContainer>
          <CommentContainer no={teamNo} parentTable={parentTable}></CommentContainer>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TeamReadPage