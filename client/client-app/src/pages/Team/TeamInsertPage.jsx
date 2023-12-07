import React from 'react'
import TeamInsertContainer from '../../containers/Team/TeamInsertContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/insert.css'
const TeamInsertPage = () => {

  return (
    <>
      <Header />
      <div className='TeamInsertPage'>
        <TeamInsertContainer></TeamInsertContainer>
      </div>
      <Footer />
    </>
  )
}

export default TeamInsertPage