import React from 'react'
import TeamRegContainer from '../../containers/Team/TeamRegContainer';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/update.css'
const TeamRegPage = () => {
  const { teamNo } = useParams();
  return (
    <>
      <Header />
      <div className='TeamUpdatePage'>
        <TeamRegContainer teamNo={teamNo}></TeamRegContainer>
      </div>
      <Footer />
    </>
  )
}

export default TeamRegPage