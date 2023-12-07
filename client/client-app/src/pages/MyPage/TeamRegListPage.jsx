import React from 'react'
import TeamRegListContainer from '../../containers/MyPage/TeamRegListContainer'

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const TeamRegListPage = () => {
  const username = 'gangjinsu'
  return (
    <>
      <Header />
      <div className='teamList'>
        <TeamRegListContainer username={username}></TeamRegListContainer>
      </div>
      <Footer />
    </>
  )
}

export default TeamRegListPage