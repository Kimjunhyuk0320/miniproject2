import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamMyRegList from '../../components/Mypage/TeamMyRegList'
import { LoginContext } from '../../contexts/LoginContextProvider'

const TeamMyRegListContainer = ({ username }) => {
  const [tlmList, setTlmList] = useState([])

  const navi = useNavigate()

  const getTlmList = async () => {
    const response = await teamAppApi.teamAppListByMember(username)
    const data = await response.data
    // console.log(data)
    setTlmList(data)
  }

  const delHandler = async (appNo) => {
    if (!window.confirm(`정말로 신청을 취소하시겠습니까?`)) return
    const response = await teamAppApi.delApp(appNo)
    const data = await response.data
    navi(`/mypage/tlmList`)
    getTlmList()
  }

  // 권한 정보 설정 관련
  const { isLogin, roles, userInfo } = useContext(LoginContext);

  // 권한 설정 관련
  const getUserInfo = async () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(!roles.isUser || !roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi('/liveBoard');
      return;
    }
    return true;
  }
  
  const sets = {
    delHandler,
  }
  
  useEffect(() => {
    getUserInfo()
    getTlmList()

    // 권한 관련
  }, [isLogin, userInfo])
  return (
    <>
      <TeamMyRegList sets={sets} tlmList={tlmList}></TeamMyRegList>
    </>
  )
}

export default TeamMyRegListContainer