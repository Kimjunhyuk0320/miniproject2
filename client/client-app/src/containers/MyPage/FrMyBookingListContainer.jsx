import React, { useState, useEffect, useContext } from "react";
import FrMyBookingList from "../../components/Mypage/FrMyBookingList";
import { useNavigate } from "react-router-dom";
import * as bookingApi from "../../apis/facilityRental/booking";
import * as userAuth from "../../apis/users/userAuth";
import { LoginContext } from "../../contexts/LoginContextProvider";

const FrMyBookingListContainer = ({ username }) => {
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const [rreqList, setRreqList] = useState([]);
  const navigate = useNavigate();
  const navi = useNavigate();

  const getRreqList = async () => {
    const response = await bookingApi.rreqList(username);
    const data = await response.data;
    // console.log(data)
    setRreqList(data);
  };

  const delHandler = async (brNo) => {
    if (!window.confirm(`정말로 예약신청을 취소하시겠습니까? `)) return;
    const response = await bookingApi.delBooking(brNo);
    const data = await response.data;
    navi(`/mypage/rreqList`);
    getRreqList();
  };

  // 회원 정보 조회 - /MyPage
  const getUserInfo = async () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }

    if (!(!roles.isUser || roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi("/liveBoard");
      return;
    }
    return true;
  };

  useEffect(() => {
    // console.log(`useEffect start`)
    getRreqList();

    // 관한 설정 관련
    getUserInfo();
  }, [isLogin, userInfo]);

  const sets = {
    delHandler,
  };

  return (
    <>
      <FrMyBookingList sets={sets} rreqList={rreqList}></FrMyBookingList>
    </>
  );
};

export default FrMyBookingListContainer;
