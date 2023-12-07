import React, { useEffect, useState } from 'react'
import FrBookingList from '../../components/Mypage/FrBookingList'
import { useNavigate } from 'react-router-dom'
import * as bookingApi from '../../apis/facilityRental/booking'

const FrBookingListContainer = ({ username }) => {

  const [rrList, setRrList] = useState([])

  const navi = useNavigate()

  const getRrList = async () => {
    const response = await bookingApi.rrList(username)
    const data = await response.data
    // console.log(data)
    setRrList(data)
  }

  const accHandler = async (brNo) => {
    if (!window.confirm(`정말로 승인처리하시겠습니까? `)) return
    const response = await bookingApi.accept({ brNo })
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  const dniHandler = async (brNo) => {
    if(!window.confirm(`정말로 거절처리하시겠습니까? `)) return
    const response = await bookingApi.denied({ brNo })
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  const conHandler = async (brNo) => {
    if(!window.confirm(`정말로 입금 및 예약확정을 진행하시겠습니까? `)) return
    const response = await bookingApi.confirmed({ brNo })
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  useEffect(() => {
    // console.log(`useEffect start`)
    getRrList()
  }, [])

  const sets = {
    accHandler,
    dniHandler,
    conHandler,
  }

  return (
    <>
      <FrBookingList rrList={rrList} sets={sets}></FrBookingList>
    </>
  )
}

export default FrBookingListContainer