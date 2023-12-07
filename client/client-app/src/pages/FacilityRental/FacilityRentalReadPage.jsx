import React from 'react'
import FacilityRentalReadContainer from '../../containers/facilityRental/FacilityRentalReadContainer'
import { useParams } from 'react-router-dom'
import CommentContainer from '../../containers/comment/CommentContainer'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

const FacilityRentalReadPage = () => {

  const { frNo } = useParams()
  const parentTable = "facility_rental"

  return (
    <>
      <Header />
      <FacilityRentalReadContainer frNo={frNo}></FacilityRentalReadContainer>
      <CommentContainer no={frNo} parentTable={parentTable}></CommentContainer>
      <Footer />
    </>
  )
}

export default FacilityRentalReadPage