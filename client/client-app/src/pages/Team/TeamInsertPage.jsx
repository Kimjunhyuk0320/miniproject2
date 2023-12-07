import React from 'react'
import TeamInsertContainer from '../../containers/Team/TeamInsertContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/insert.css'
const TeamInsertPage = () => {

  return (
    <div className='TeamInsertPage'>
        <Header />
        <TeamInsertContainer></TeamInsertContainer>
        <Footer />
      </div>
  )
}

export default TeamInsertPage