import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateForm from '../../components/LiveBoard/UpdateForm'
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
import { LoginContext } from '../../contexts/LoginContextProvider'


const LiveBoardUpdateContainer = ({no}) => {
  const [liveBoard, setLiveBoard] = useState({})
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [writer, setWriter] = useState('');

  const getLiveBoard = async () => {
    const response = await liveBoards.getPage(no);
    const data = await response.data
    setLiveBoard(data)
  }

  // 권한 설정 관련
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

  useEffect(()=>{
    getLiveBoard()
    // 권한 관련 설정
    if( !getUserInfo ) return
    if (userInfo && userInfo.username) {
      setUsername(userInfo.username);
      setWriter(userInfo.nickname);
    }

  },[isLogin, userInfo])

  return (
    <div>
        <UpdateForm liveBoard={liveBoard} username={username} writer={writer}/>
    </div>
  )
}

export default LiveBoardUpdateContainer