import React from 'react'
import TeamListContainer from '../../containers/Team/TeamListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';
import './css/teamList.css'
const TeamListPage = () => {
  return (
      <div className='TeamListPage'>
        <Header />
          <TeamListContainer></TeamListContainer>
          <ActiveFooter/>
        <Footer />
      </div>
  )
}

export default TeamListPage