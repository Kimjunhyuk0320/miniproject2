import React from 'react'
import FacilityRentalReadContainer from '../../containers/facilityRental/FacilityRentalReadContainer'
import { useParams } from 'react-router-dom'
import CommentContainer from '../../containers/comment/CommentContainer'

const FacilityRentalReadPage = () => {
  
  const {frNo} = useParams()
  const parentTable = "facility_rental"

  return (
    <>
      <FacilityRentalReadContainer frNo={frNo}></FacilityRentalReadContainer>
      <CommentContainer no={frNo} parentTable={parentTable}></CommentContainer>
    </>
  )
}

export default FacilityRentalReadPage