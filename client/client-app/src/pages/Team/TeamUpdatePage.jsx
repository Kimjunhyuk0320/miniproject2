import React from 'react'
import { useParams } from 'react-router-dom'
import TeamUpdateContainer from '../../containers/Team/TeamUpdateContainer'
import './css/update.css'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
const TeamUpdatePage = () => {
  const { teamNo } = useParams()

  return (
      <div className='TeamUpdatePage'>
        <Header />
          <TeamUpdateContainer teamNo={teamNo}></TeamUpdateContainer>
        <Footer />
      </div>
  )
}

export default TeamUpdatePage