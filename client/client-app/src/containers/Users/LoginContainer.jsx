import React, { useEffect, useState } from 'react'
import Login from '../../components/Users/Login'
import { useNavigate } from 'react-router-dom'
import * as userAuth from '../../apis/users/userAuth'

const LoginContainer = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberId, setRememberId] = useState('');
  const [rememberMe, setRemeberMe] = useState('');

  const navi = useNavigate()

  const loginHandler = async () => {
    //csrf토큰이 들어가야합니다!!!!!!!!!!!!!!!!
    const response = await userAuth.login(sets)
    const data = response.data
    if (data != null) {
      navi(`/`)
    } else {
      getCookies()
      navi(`/login`)
    }
  }

  const getCookies = () => {
    if(userAuth.getCookieValue('rememberId') != null){
      setRememberId(true)
      setUsername(userAuth.getCookieValue('rememberId'))
    }else{
      setRememberId(false)
    }
  }

  const sets = {
    username,
    setUsername,
    password,
    setPassword,
    rememberId,
    setRememberId,
    "remember-me": rememberMe,
    setRemeberMe,
    loginHandler
  }

  useEffect(() => {
    getCookies()
  }, [])


  return (
    <>
      <Login sets={sets}></Login>
    </>
  )
}

export default LoginContainer