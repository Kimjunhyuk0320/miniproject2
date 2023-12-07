import React from 'react'
import FacilityRentalInsertContainer from '../../containers/facilityRental/FacilityRentalInsertContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FacilityRentalInsertPage = () => {
  return (
    <div className='LiveBoardInsert'>
      <Header />
      <FacilityRentalInsertContainer></FacilityRentalInsertContainer>
      <Footer />
    </div>
  )
}

export default FacilityRentalInsertPage