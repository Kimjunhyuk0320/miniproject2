import React, { useContext } from 'react'
import TeamMyRegListContainer from '../../containers/MyPage/TeamMyRegListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import UserContext from '../../context/UserContext';
// import ActiveFooter from '../../layout/ActiveFooter';

const TeamMyRegListPage = () => {
  const {jwtSets} = useContext(UserContext)

  const username = jwtSets.parsedToken.username ?? 'GUEST'



  return (
    <div className='TicketPurchaseList'>
      <Header />
      <TeamMyRegListContainer username={username}></TeamMyRegListContainer>
      {/* <ActiveFooter/> */}
      <Footer />
    </div>
  )
}

export default TeamMyRegListPage