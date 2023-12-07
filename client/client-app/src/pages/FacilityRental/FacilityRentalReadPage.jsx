import React from 'react'
import FacilityRentalReadContainer from '../../containers/facilityRental/FacilityRentalReadContainer'
import { useParams } from 'react-router-dom'
import CommentContainer from '../../containers/comment/CommentContainer'

const FacilityRentalReadPage = () => {
  
  const {frNo} = useParams()
  const parentTable = "facility_rental"

  return (
    <div className='LiveBoardRead'>
      <div className='totalContainer'>
        <FacilityRentalReadContainer frNo={frNo}></FacilityRentalReadContainer>
        <CommentContainer no={frNo} parentTable={parentTable}></CommentContainer>
      </div>
    </div>
  )
}

export default FacilityRentalReadPage