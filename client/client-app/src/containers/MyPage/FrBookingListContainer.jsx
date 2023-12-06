import React, { useEffect, useState } from 'react'
import FrBookingList from '../../components/Mypage/FrBookingList'
import { useNavigate } from 'react-router-dom'
import * as bookingApi from '../../apis/facilityRental/booking'

const FrBookingListContainer = ({username}) => {

  const [rrList, setRrList] = useState([])

  const navi = useNavigate()

  const getRrList = async () => {
    const response = await bookingApi.rrList(username)
    const data = await response.data
    console.log(data)
    setRrList(data)
  }

  const accHandler = async (brNo) => {
    const response = await bookingApi.accept({brNo})
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  const dniHandler = async (brNo) => {
    const response = await bookingApi.denied({brNo})
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  const conHandler = async (brNo) => {
    const response = await bookingApi.confirmed({brNo})
    const data = await response.data
    navi(`/mypage/rrList`)
    getRrList()
  }

  useEffect(() => {
    console.log(`useEffect start`)
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