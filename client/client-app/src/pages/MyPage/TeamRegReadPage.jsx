import React from 'react'
import TeamRegReadContainer from '../../containers/MyPage/TeamRegReadContainer'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const TeamRegReadPage = () => {

  const { appNo } = useParams()

  return (
    <>
      <Header />
      <TeamRegReadContainer appNo={appNo}></TeamRegReadContainer>
      <Footer />
    </>
  )
}

export default TeamRegReadPage