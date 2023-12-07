import React, { useState } from 'react'
import Join from '../../components/Users/Join'
import * as userApi from '../../apis/users/userApi'
import { useNavigate } from 'react-router-dom'

const JoinContainer = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userPwCheck, setUserPwCheck] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [auth, setAuth] = useState('ROLE_USER')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [file, setFile] = useState(null)
  const [fileSource, setFileSource] = useState('')
  const [fileName, setFileName] = useState('')
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);

  //중복검사 통과 여부 상태 만들어야합니다.

  const navi = useNavigate();

  const joinHandler = async () => {

    console.log(sets)

    

    const response = await userApi.join(sets)
    const data = await response.data
    if (data != null) {
      navi(`/liveBoard`)
    } else {
      navi(`/join`)
    }
  }

  const usernameCheckedHandler = async () => {
    const response = await userApi.usernameCheck(username)
    const data = await response.data

    if (data != null) {
      if (data == 'Y') {

        window.alert('사용가능한 아이디입니다.')
        setUsernameChecked(true)
      } else {
        window.alert('중복된 아이디입니다.')
      }
    }
  }
  const nicknameCheckedHandler = async () => {
    const response = await userApi.nicknameCheck(nickname)
    const data = await response.data

    if (data != null) {
      if (data == 'Y') {

        window.alert('사용가능한 닉네임입니다.')
        setNicknameChecked(true)
      } else {
        window.alert('중복된 닉네임입니다.')
      }
    }
  }
  const phoneCheckedHandler = async () => {
    const response = await userApi.phoneCheck(phone)
    const data = await response.data

    if (data != null) {
      if (data == 'Y') {

        window.alert('사용가능한 휴대전화입니다.')
        setPhoneChecked(true)
      } else {
        window.alert('중복된 휴대전화입니다.')
      }
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
    usernameChecked,
    setUsernameChecked,
    nicknameChecked,
    setNicknameChecked,
    phoneChecked,
    setPhoneChecked,
    joinHandler,
    usernameCheckedHandler,
    nicknameCheckedHandler,
    phoneCheckedHandler
  }




  return (
    <>
      <Join sets={sets}></Join>
    </>
  )
}

export default JoinContainer