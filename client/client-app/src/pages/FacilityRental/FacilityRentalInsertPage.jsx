import React from 'react'
import FacilityRentalInsertContainer from '../../containers/facilityRental/FacilityRentalInsertContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';

const FacilityRentalInsertPage = () => {
  return (
    <div className='LiveBoardInsert'>
      <Header />
      <FacilityRentalInsertContainer></FacilityRentalInsertContainer>
      <ActiveFooter/>
      <Footer />
    </div>
  )
}

export default FacilityRentalInsertPage