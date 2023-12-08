import React from 'react'
import TeamListContainer from '../../containers/Team/TeamListContainer'
import TeamListStaticContainer from '../../containers/Team/TeamListStaticContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';
import './css/teamList.css'
const TeamListPage = () => {
  return (
    <div className='TeamListPage'>
      <Header />
      <TeamListContainer></TeamListContainer>
      <TeamListStaticContainer/>
      <ActiveFooter />
      <Footer />
    </div>
  )
}

export default TeamListPage