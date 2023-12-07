import React from 'react'
import FacilityRentalUpdateContainer from '../../containers/facilityRental/FacilityRentalUpdateContainer'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FacilityRentalUpdatePage = () => {

  const { frNo } = useParams()

  return (
    <>
      <Header />
      <FacilityRentalUpdateContainer frNo={frNo}></FacilityRentalUpdateContainer>
      <Footer />
    </>
  )
}

export default FacilityRentalUpdatePage