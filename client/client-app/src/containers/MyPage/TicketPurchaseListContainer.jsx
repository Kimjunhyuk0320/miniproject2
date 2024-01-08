import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as userAuth from '../../apis/users/userAuth';
import TableList from '../../components/Mypage/TableList';
import { LoginContext } from '../../contexts/LoginContextProvider'

const TicketPurchaseListContainer = () => {

  // const [userInfo, setUserInfo] = useState();
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate()

  // 권한 설정 관련
  // 권한 설정 관련 (이게 기준이다.)
  const getUserInfo = () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(roles.isUser || roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navigate("/liveBoard");
      return;
    }
    return true;
  };

  useEffect(() => {

    getUserInfo()
    // getUserInfo()
   
  }, [isLogin, userInfo])


  return (
    <>
      <TableList userInfo={userInfo} />
    </>
  )
}

export default TicketPurchaseListContainer