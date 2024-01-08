import React, { useState, useEffect, useContext } from 'react'
import FrBookingList from '../../components/Mypage/FrBookingList'
import { useNavigate } from 'react-router-dom'
import * as bookingApi from '../../apis/facilityRental/booking'
import * as userAuth from '../../apis/users/userAuth'
import { LoginContext } from '../../contexts/LoginContextProvider'

const FrBookingListContainer = ({ username }) => {

  const [rrList, setRrList] = useState([])

  const navi = useNavigate()
  const { isLogin, roles } = useContext(LoginContext);

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

   // 권한 관련 설정 정보
   const [userInfo, setUserInfo] = useState();
 
   // 회원 정보 조회 - /MyPage
   const getUserInfo = async () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    
    if (!(roles.isUser || !roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi('/liveBoard');
      return;
    }
    return true;
   }
 

  useEffect(() => {
    // console.log(`useEffect start`)
    getRrList()

    // 관한 설정 관련
    getUserInfo()
  }, [isLogin, userInfo])

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