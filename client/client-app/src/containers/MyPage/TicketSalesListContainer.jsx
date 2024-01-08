import React, { useState, useEffect, useContext } from 'react';
import TicketSalesList from '../../components/Mypage/TicketSalesList';
import * as userAuth from '../../apis/users/userAuth';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';

const TicketSalesListContainer = () => {

  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      console.log("userInfo 객체는 비어있습니다.");
      return;
    } else {
      console.log("userInfo 객체에는 속성이 있습니다.");
    }
    
    if (!isLogin || !userInfo) {
      navigate('/login');
      return;
    }
    
    if (!(roles.isUser || !roles.isBand || !roles.isClub)) {
      alert('권한이 설정되어있지 않아 접근할 수 없습니다.');
      navigate('/liveBoard');
      return;
    }

  }, [isLogin, userInfo]);

  return (
    <div>
      <TicketSalesList userInfo={userInfo}/>
    </div>
  );
};

export default TicketSalesListContainer;
