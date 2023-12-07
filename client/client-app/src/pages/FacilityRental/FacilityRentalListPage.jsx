import React from 'react'
import FacilityRentalListContainer from '../../containers/facilityRental/FacilityRentalListContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';
import ImgSliderContainer from '../../containers/facilityRental/ImgSliderContainer';

const FacilityRentalListPage = () => {

  return (
    <div className='LiveBoardList'>
      <Header />
      <ImgSliderContainer />
      <FacilityRentalListContainer></FacilityRentalListContainer>
      <ActiveFooter/>
      <Footer />      
      
    </div>
  

  )
}

export default FacilityRentalListPage