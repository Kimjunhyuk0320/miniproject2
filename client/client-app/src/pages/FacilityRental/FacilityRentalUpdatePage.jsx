import React from 'react'
import FacilityRentalUpdateContainer from '../../containers/facilityRental/FacilityRentalUpdateContainer'
import { useParams } from 'react-router-dom'

const FacilityRentalUpdatePage = () => {

  const {frNo} = useParams()

  return (
    <>
      <FacilityRentalUpdateContainer frNo={frNo}></FacilityRentalUpdateContainer>
    </>
  )
}

export default FacilityRentalUpdatePage