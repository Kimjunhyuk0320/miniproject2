import React, { useState, useEffect, useContext } from 'react'
import MyInfo from '../../components/Mypage/MyInfo'
import * as userAuth from '../../apis/users/userAuth'
import { LoginContext } from '../../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom'

const MyInfoContainer = () => {

  const [file, setFile] = useState(null)
  const [fileSource, setFileSource] = useState('')
  const [fileName, setFileName] = useState('')
  
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate()

  // 회원 정보 조회 - /MyPage
  const getUserInfo = async () => {
   // alert("getUserInfo 안으로 들어옴.")
    // alert(`roles.isUser : ${roles.isUser} roles.isBand : ${roles.isBand} roles.isClub : ${roles.isClub}`)

    if (!isLogin || !userInfo) {
      navigate("/login");
      return false
    }

    if (!(roles.isUser || roles.isBand || roles.isClub)) {
      alert("권한이 설정되어있지 않아 접급할 수 없습니다.")
      navigate("/liveBoard");
      return false
    }
    

    // const response = await userAuth.userInfo()
    // const data = response.data
    // console.log(`getUserInfo`)
    // console.log(data)
    // setUserInfo(data)
    return true
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const sets = {
    file,
    setFile,
    fileSource,
    setFileSource,
    fileName,
    setFileName,
  }

  return (
    <MyInfo sets={sets} userInfo={userInfo} roles={roles} />
  )
}

export default MyInfoContainer