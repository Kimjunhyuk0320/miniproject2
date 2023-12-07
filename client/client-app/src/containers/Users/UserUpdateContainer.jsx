import React, { useEffect, useState } from 'react'
import UserUpdate from '../../components/Users/UserUpdate'
import { useNavigate } from 'react-router-dom'
import * as userApi from '../../apis/users/userApi'

const UserUpdateContainer = ({username}) => {

  

  const [password,setPassword] = useState('')
  const [userPwCheck,setUserPwCheck] = useState('')
  const [name,setName] = useState('')
  const [nickname,setNickname] = useState('')
  const [auth,setAuth] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [file,setFile] =useState(null)

  //중복검사 통과 여부 상태 만들어야합니다.

  const navi = useNavigate();

  const updateHandler = async () =>{

    console.log(sets)
    const response = await userApi.update(sets)
    const data = await response.data
    if(data!=null){
      navi(`/liveBoard`)
    }else{
      navi(`/mypage/update`)
    }
  }

  const getUserInfo = async ()=>{

    const response = await userApi.userInfo(username)
    const data = await response.data
    setName(data.name)
    setNickname(data.nickname)
    setAuth(data.auth)
    setPhone(data.phone)
    setEmail(data.email)
  }

  const sets = {
    username,
    password,
    setPassword,
    userPwCheck,
    setUserPwCheck,
    name,
    setName,
    nickname,
    setNickname,
    auth,
    setAuth,
    email,
    setEmail,
    phone,
    setPhone,
    file,
    setFile,
    updateHandler
  }

  useEffect(()=>{
    getUserInfo()
  },[])

    

  return (
    <>
        <UserUpdate sets={sets}></UserUpdate>
    </>
  )
}

export default UserUpdateContainer