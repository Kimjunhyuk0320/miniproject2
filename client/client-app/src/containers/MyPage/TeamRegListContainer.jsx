import React, { useState, useEffect, useContext } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamRegList from '../../components/Mypage/TeamRegList'
import * as userAuth from '../../apis/users/userAuth'
import { LoginContext } from '../../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom'

const TeamRegListContainer = ({ username }) => {
  const [tllList, setTllList] = useState([])

  const navi = useNavigate()

  const getTllList = async () => {
    const response = await teamAppApi.teamAppListByLeader(username);
    const data = await response.data
    // console.log(data)
    setTllList(data)
  }

  const accHandler = async (appNo) => {
    if (!window.confirm(`정말로 승인처리하시겠습니까?`)) return
    const response = await teamAppApi.accept({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  const dniHandler = async (appNo) => {
    if (!window.confirm(`정말로 거절처리하시겠습니까?`)) return
    const response = await teamAppApi.denied({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  const conHandler = async (appNo) => {
    if (!window.confirm(`정말로 입금 및 참가확정을 진행하시겠습니까?`)) return
    const response = await teamAppApi.confirmed({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  // const [userInfo, setUserInfo] = useState();
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
    if (!(!roles.isUser || roles.isBand || !roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi("/liveBoard");
      return;
    }
    return true;
  }


  useEffect(() => {
    // 권한 정보 관련 설정
    getUserInfo()
    
    // 
    getTllList()
  }, [isLogin, userInfo])

  const sets = {
    accHandler,
    dniHandler,
    conHandler,
  }

  return (
    <>
      <TeamRegList sets={sets} tllList={tllList}></TeamRegList>
    </>
  )
}

export default TeamRegListContainer