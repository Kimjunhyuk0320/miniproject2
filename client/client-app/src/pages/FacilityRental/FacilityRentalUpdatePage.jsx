import React from 'react'
import FacilityRentalUpdateContainer from '../../containers/facilityRental/FacilityRentalUpdateContainer'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';

const FacilityRentalUpdatePage = () => {

  const { frNo } = useParams()

  return (
    <div className='LiveBoardUpdate'>
      <Header />
      <FacilityRentalUpdateContainer frNo={frNo}></FacilityRentalUpdateContainer>
      <ActiveFooter/>
      <Footer />
    </div>
  )
}

export default FacilityRentalUpdatePage