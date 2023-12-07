import React, { useState } from 'react'
import JoinContainer from '../../containers/Users/JoinContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/JoinPage.css';

const JoinPage = () => {
  return (
    <>
      <Header />
      <div className='JoinPage'>
        <JoinContainer></JoinContainer>
      </div>
      <Footer />
    </>
  )
}

export default JoinPage