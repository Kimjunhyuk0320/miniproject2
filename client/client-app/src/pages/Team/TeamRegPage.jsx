import React from 'react'
import TeamRegContainer from '../../containers/Team/TeamRegContainer';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/update.css'
const TeamRegPage = () => {
  const { teamNo } = useParams();
  return (
      <div className='TeamUpdatePage'>
        <Header />
          <TeamRegContainer teamNo={teamNo}></TeamRegContainer>
        <Footer />
      </div>
  )
}

export default TeamRegPage