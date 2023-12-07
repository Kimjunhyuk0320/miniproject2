import React from 'react'
import FacilityRentalListContainer from '../../containers/facilityRental/FacilityRentalListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FacilityRentalListPage = () => {

  return (
    <div className='LiveBoardList'>
      <Header />
      <FacilityRentalListContainer></FacilityRentalListContainer>
      <Footer />      
    </div>
  

  )
}

export default FacilityRentalListPage