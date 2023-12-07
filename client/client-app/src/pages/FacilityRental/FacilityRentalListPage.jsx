import React from 'react'
import FacilityRentalListContainer from '../../containers/facilityRental/FacilityRentalListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FacilityRentalListPage = () => {

  return (
    <>
      <Header />
      <FacilityRentalListContainer></FacilityRentalListContainer>
      <Footer />
    </>
  )
}

export default FacilityRentalListPage