import React, { useContext, useEffect, useState } from 'react'
import FrMyBookingList from '../../components/Mypage/FrMyBookingList'
import { useNavigate } from 'react-router-dom'
import * as bookingApi from '../../apis/facilityRental/booking';
import UserContext from '../../context/UserContext'

const FrMyBookingListContainer = ({ username }) => {

  const { jwtSets } = useContext(UserContext)


  const [rreqList, setRreqList] = useState([])

  const navi = useNavigate()

  const getRreqList = async () => {
    const response = await bookingApi.rreqList(username, jwtSets.jwtToken)
    const data = await response.data
    console.log(data)
    setRreqList(data)
  }


  const delHandler = async (brNo) => {
    if (!window.confirm(`정말로 예약신청을 취소하시겠습니까? `)) return
    const response = await bookingApi.delBooking(brNo, jwtSets.jwtToken)
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