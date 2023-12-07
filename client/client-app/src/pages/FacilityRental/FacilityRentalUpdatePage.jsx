import React from 'react'
import FacilityRentalUpdateContainer from '../../containers/facilityRental/FacilityRentalUpdateContainer'
import { useParams } from 'react-router-dom'

const FacilityRentalUpdatePage = () => {

  const {frNo} = useParams()

  return (
    <div className='LiveBoardUpdate'>
      <FacilityRentalUpdateContainer frNo={frNo}></FacilityRentalUpdateContainer>
    </div>
  )
}

export default FacilityRentalUpdatePage