import React, { useContext, useEffect, useState } from 'react'
import UserUpdate from '../../components/Users/UserUpdate'
import { useNavigate } from 'react-router-dom'
import * as userAuth from '../../apis/users/userAuth'
import { LoginContext } from '../../contexts/LoginContextProvider'

const UserUpdateContainer = () => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userPwCheck, setUserPwCheck] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [auth, setAuth] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [file, setFile] = useState(null)
  const [fileSource, setFileSource] = useState('')
  const [fileName, setFileName] = useState('')
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);

  // 중복검사 통과 여부 상태 만들어야합니다.

  const navi = useNavigate();

  // 유효성 검사 함수
  // 1. 비밀번호에 대한 부분
  function validatePassword() {

    // 나머지 유효성 검사는 그대로 유지
    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return false;
    }

    let complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!complexityRegex.test(password)) {
      alert("비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 포함해야 합니다.");
      return false;
    }

    return true;
  }

  // 2. 이메일 유효성 검사 부분
  function validateEmail() {

    let complexityRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 첫 번째 부분에는 영문자, 숫자, 밑줄("_"), 마침표(".") 및 퍼센트("%") 기호가 포함하게 하고,
    // 두 번째 부분에는 도메인 주소가 오도록 함

    if (!complexityRegex.test(email)) {
      return false;
    }

    return true;
  }

  // 3. 연락처 유효성 검사 부분
  function validatePhone() {
    let complexityRegex = /^(01[016789])(\d{3,4})(\d{4})$/

    if (!complexityRegex.test(phone)) {
      return false;
    }

    return true;
  }

  const nicknameCheckedHandler = async () => {
    const response = await userAuth.nicknameCheck(nickname)
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
    const response = await userAuth.phoneCheck(phone)
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


  const updateHandler = async () => {

    // console.log(sets)


    if (password != userPwCheck) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!nicknameChecked) {
      alert('닉네임 중복검사를 실시해주세요.');
      return
    }

    // if (!phoneChecked) {
    //   alert('연락처 중복검사를 실시해주세요.');
    //   return
    // }

    // 유효성 검사 부분
    // 1. 비밀번호에 대한 유효성 검사
    // if (!validatePassword()) {
    //   return
    // }
    // 2. 이메일에 대한 유효성 검사 실시
    // if (!validateEmail()) {

    //   alert('잘못된 이메일 형식입니다.')
    //   return
    // }
    // 3. 연락처에 대한 유효성 검사 실시
    // if (!validatePhone()) {
    //   alert('잘못된 연락처 형식입니다. ( - 제외)')
    //   return
    // }


    const response = await userAuth.update(sets)
    const data = await response.data
    if (data != null) {
      navi(`/liveBoard`)
    } else {
      navi(`/mypage/update`)
    }
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
    fileSource,
    setFileSource,
    fileName,
    setFileName,
    nicknameChecked,
    setNicknameChecked,
    phoneChecked,
    setPhoneChecked,
    updateHandler,
    nicknameCheckedHandler,
    phoneCheckedHandler,
  }



  const [userInfo, setUserInfo] = useState();
  
  const { isLogin, roles, logout } = useContext(LoginContext);

  // 회원 정보 조회 - /user/info
  const getUserInfo = async () => {
    const response = await userAuth.userInfo()
    const data = response.data
    console.log(`getUserInfo`)
    console.log(data)
    setUserInfo(data)
  }
  
  // 권한 설정
  const getAuthInfo = async () => {
    if (userInfo) {
      alert('접근할 수 없는 요청입니다.')
      navi("/liveBoard");
      return;
    }
    return true;
  }

  // 회원 정보 수정
  const updateUser = async(form) => {
    console.log(form)

    let response
    let data
    const headers = {
      headers: {
        'Content-Type' : 'multipart/form-data',
      },
    };
    try {
      response = await userAuth.update(form, headers)
    } catch (error) {
      console.error(`${error}`)
      console.error(`회원정보 수정 중 에러가 발생했습니다.`)
    }
    data = response.data
    const status = response.status
    console.log(`data : ${data}`)
    console.log(`status : ${status}`)

    if(status === 200) {
      console.log(`회원정보 수정 성공!`)
      alert(`회원정보 수정 성공!`)
      logout()
      navi(`/login`)
    } else {
      console.log(`회원정보 수정 실패!`)
      alert(`회원정보 수정 실패!`)
    }
  }

  useEffect(() => {

    // 유저 정보 가져오기
    getUserInfo()

    // 권한 설정
    getAuthInfo()
  }, [isLogin, userInfo])

  return (
    <>
      <UserUpdate sets={sets} userInfo={userInfo} updateUser={updateUser}></UserUpdate>
    </>
  )
}

export default UserUpdateContainer