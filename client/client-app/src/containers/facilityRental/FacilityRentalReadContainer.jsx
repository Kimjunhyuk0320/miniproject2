import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'
import * as brApi from '../../apis/facilityRental/booking'
import FacilityRentalRead from '../../components/facilityRental/FacilityRentalRead'

const FacilityRentalReadContainer = ({frNo}) => {

  const [fr, setFr] = useState({})
  const navi = useNavigate()

  const username = 'gangjinsu'
  const phone = '01012341234'

  const reservation = {
    frNo,
    username,
    phone
  }

  const getFr = async ()=>{
    const response = await frApi.frRead(frNo)
    const data = await response.data
    console.log(data)
    setFr(data)
  }
  const resvationHandler = async ()=>{
    const response = await brApi.insert(reservation)
    const data =await response.data

    if(data!=null){
      navi(`/frList`)
    }else{
      navi(`/fr/${frNo}`)
    }
    
  }

  const delHandler = async ()=>{
    const response = await frApi.frDelete(frNo)
    const data = await response.data

    if(data!=null){
      navi(`/frList`)
    }else{
      navi(`/fr/${frNo}`)
    }
  }
  useEffect(()=>{
    getFr()
  },[frNo])

  return (
    <>
      <FacilityRentalRead fr={fr} delHandler={delHandler} resvationHandler={resvationHandler}></FacilityRentalRead>
    </>
  )
}

export default FacilityRentalReadContainer