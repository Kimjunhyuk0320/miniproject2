import React from 'react'
import TeamRegReadContainer from '../../containers/MyPage/TeamRegReadContainer'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
// import ActiveFooter from '../../layout/ActiveFooter';

const TeamRegReadPage = () => {

  const { appNo } = useParams()

  return (
    <div className='LiveBoardRead'>
      <Header />
      <TeamRegReadContainer appNo={appNo}></TeamRegReadContainer>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default TeamRegReadPage