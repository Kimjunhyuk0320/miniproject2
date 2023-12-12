import React, { useContext } from 'react'
import TeamRegListContainer from '../../containers/MyPage/TeamRegListContainer'

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UserContext from '../../context/UserContext';
// import ActiveFooter from '../../layout/ActiveFooter';
const TeamRegListPage = () => {
  const { jwtSets } = useContext(UserContext)
  const username = jwtSets.parsedToken.username ?? 'GUEST'
  return (
    <div className='TicketPurchaseList'>
      <Header />
      <div className='teamList'>
        <TeamRegListContainer username={username}></TeamRegListContainer>
      </div>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default TeamRegListPage