import React, { useState, useEffect, useContext } from 'react'
import MyPage from '../../components/Mypage/MyPage'
import * as userAuth from '../../apis/users/userAuth'
import { LoginContext } from '../../contexts/LoginContextProvider'
import { useNavigate } from 'react-router-dom'

const MyPageConatiner = () => {

  const [userInfo, setUserInfo] = useState();
  const { isLogin, roles, logout } = useContext(LoginContext)
  const navigate = useNavigate()

  const [file, setFile] = useState(null)
  const [fileSource, setFileSource] = useState('')
  const [fileName, setFileName] = useState('')

  // 회원 정보 조회 - /MyPage
  const getUserInfo = async () => {
    // alert("getUserInfo 안으로 들어옴.")

    if (!isLogin) {
      navigate("/login");
      return;
    }
    
    if (!(roles.isUser || roles.isBand || roles.isClub)) {
      navigate("/login");
      return;
    }

    const response = await userAuth.userInfo()
    const data = response.data
    console.log(`getUserInfo`)
    console.log(data)
    setUserInfo(data)
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
    <MyPage isLogin={isLogin} sets={sets} userInfo={userInfo} roles={roles}/>
  )
}

export default MyPageConatiner