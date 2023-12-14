import React, { useContext, useEffect, useState } from 'react'
import Login from '../../components/Users/Login'
import { useNavigate } from 'react-router-dom'
import * as userApi from '../../apis/users/userApi'
import UserContext from '../../context/UserContext'

const LoginContainer = () => {

  const { jwtSets } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberId, setRememberId] = useState('');
  const [rememberMe, setRemeberMe] = useState('');

  const navi = useNavigate()

  const loginHandler = async () => {
    //csrf토큰이 들어가야합니다!!!!!!!!!!!!!!!!
    try {
      const response = await userApi.login(sets)
      const data = response.data
      const responseJwtInfo = await userApi.jwtInfo(data)
      const dataJwtInfo = await responseJwtInfo.data
      //컨텍스트에 토큰등록
      //컨텍스트에 해석정보등록
      await jwtSets.login(data, dataJwtInfo)
      console.log(jwtSets.isLogin, jwtSets.jwtToken, jwtSets.parsedToken)
      navi(`/`)
      console.log('this jwtStets', jwtSets)
    } catch (error) {
      console.error(error)
      window.alert(`아이디 또는 비밀번호가 일치하지 않습니다.`)
      getCookies()
      navi(`/login`)
    }
  }

  const getCookies = () => {
    if (userApi.getCookieValue(`remember-id`) != null) {
      setRememberId(true)
      setUsername(userApi.getCookieValue(`remember-id`))
    }
  }

  const sets = {
    username,
    setUsername,
    password,
    setPassword,
    rememberId,
    setRememberId,
    rememberMe,
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