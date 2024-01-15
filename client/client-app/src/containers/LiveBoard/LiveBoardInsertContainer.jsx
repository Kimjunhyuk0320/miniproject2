import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InsertForm from "../../components/LiveBoard/InsertForm";
import { LoginContext } from '../../contexts/LoginContextProvider'

const LiveBoardInsertContainer = () => {
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [writer, setWriter] = useState('');
  // 권한 설정 관련 (이게 기준이다.)
  const getUserInfo = () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(!roles.isUser || roles.isBand || !roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navigate("/liveBoard");
      return;
    }
    return true;
  };

  useEffect(() => {
    // 권한 관련 설정
    getUserInfo()
    if (userInfo && userInfo.username) {
      setUsername(userInfo.username);
      setWriter(userInfo.nickname);
    }
  }, [userInfo, isLogin]);

  return (
    <div>
      <InsertForm username={username} writer={writer}/>
    </div>
  );
};

export default LiveBoardInsertContainer;
