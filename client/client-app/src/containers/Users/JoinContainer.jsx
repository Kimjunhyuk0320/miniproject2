import React, { useState } from 'react'
import Join from '../../components/Users/Join'
import * as userApi from '../../apis/users/userApi'
import { useNavigate } from 'react-router-dom'

const JoinContainer = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [userPwCheck,setUserPwCheck] = useState('')
  const [name,setName] = useState('')
  const [nickName,setNickName] = useState('')
  const [auth,setAuth] = useState('ROLE_USER')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [file,setFile] =useState(null)

  const navi = useNavigate();

  const sets = {
    username,
    setUsername,
    password,
    setPassword,
    userPwCheck,
    setUserPwCheck,
    name,
    setName,
    nickName,
    setNickName,
    auth,
    setAuth,
    email,
    setEmail,
    phone,
    setPhone,
    file,
    setFile,
    insertHandler
  }


  const insertHandler = async () =>{

    console.log(sets)
    const response = await userApi.join(sets)
    const data = await response.data
    if(data!=null){
      navi(`/liveBoard`)
    }else{
      navi(`/join`)
    }
  }
    

  return (
    <>
        <Join sets={sets}></Join>
    </>
  )
}

export default JoinContainer