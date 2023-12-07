import React, { useState } from 'react'
import Join from '../../components/Users/Join'
import * as userApi from '../../apis/users/userApi'
import { useNavigate } from 'react-router-dom'

const JoinContainer = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [userPwCheck,setUserPwCheck] = useState('')
  const [name,setName] = useState('')
  const [nickname,setNickname] = useState('')
  const [auth,setAuth] = useState('ROLE_USER')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [file,setFile] =useState(null)
  const [fileSource,setFileSource] = useState('')
  const [fileName,setFileName] = useState('')

  //중복검사 통과 여부 상태 만들어야합니다.

  const navi = useNavigate();

  const joinHandler = async () =>{

    console.log(sets)
    const response = await userApi.join(sets)
    const data = await response.data
    if(data!=null){
      navi(`/liveBoard`)
    }else{
      navi(`/join`)
    }
  }
  const sets = {
    username,
    setUsername,
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
    fileSource,
    setFileSource,
    fileName,
    setFileName,
    joinHandler
  }


    

  return (
    <>
        <Join sets={sets}></Join>
    </>
  )
}

export default JoinContainer