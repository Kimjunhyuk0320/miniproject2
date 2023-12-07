import React from 'react'
import FacilityRentalReadContainer from '../../containers/facilityRental/FacilityRentalReadContainer'
import { useParams } from 'react-router-dom'
import CommentContainer from '../../containers/comment/CommentContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import ActiveFooter from '../../layout/ActiveFooter';

const FacilityRentalReadPage = () => {

  const { frNo } = useParams()
  const parentTable = "facility_rental"

  return (
    <>
      <div className='LiveBoardRead'>
        <Header />
        <div className='totalContainer'>
          <FacilityRentalReadContainer frNo={frNo}></FacilityRentalReadContainer>
          <CommentContainer no={frNo} parentTable={parentTable}></CommentContainer>
        </div>
      </div>
      <ActiveFooter />
      <Footer />
    </>
  )
}

export default FacilityRentalReadPage