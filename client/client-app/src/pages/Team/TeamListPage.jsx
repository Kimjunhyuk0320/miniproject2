import React from 'react'
import TeamListContainer from '../../containers/Team/TeamListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/teamList.css'
const TeamListPage = () => {
  return (
    <>
      <Header />
      <div className='TeamListPage'>
        <TeamListContainer></TeamListContainer>
      </div>
      <Footer />
    </>
  )
}

export default TeamListPage