import React, { useEffect, useState } from 'react'
import FrMyBookingList from '../../components/Mypage/FrMyBookingList'
import { useNavigate } from 'react-router-dom'
import * as bookingApi from '../../apis/facilityRental/booking'

const FrMyBookingListContainer = ({username}) => {


    const [rreqList, setRreqList] = useState([])

    const navi = useNavigate()
  
    const getRreqList = async () => {
      const response = await bookingApi.rreqList(username)
      const data = await response.data
      console.log(data)
      setRreqList(data)
    }
  
  
    const delHandler = async (brNo) => {
      const response = await bookingApi.delBooking(brNo)
      const data = await response.data
      navi(`/mypage/rreqList`)
      getRreqList()
    }
  
    useEffect(() => {
      console.log(`useEffect start`)
      getRreqList()
    }, [])
  
    const sets = {
      delHandler,
    }

  return (
    <>
        <FrMyBookingList sets={sets} rreqList={rreqList}></FrMyBookingList>
    </>
  )
}

export default FrMyBookingListContainer