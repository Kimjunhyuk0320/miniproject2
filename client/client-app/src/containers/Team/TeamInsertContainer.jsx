import React, { useContext, useEffect, useState } from 'react'
import TeamInsert from '../../components/Team/TeamInsert'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'
import { LoginContext } from '../../contexts/LoginContextProvider'

const TeamInsertContainer = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('경기')
  const [address, setAddress] = useState('')
  const [liveDate, setLiveDate] = useState('')
  const [liveStTime, setLiveStTime] = useState('')
  const [liveEndTime, setLiveEndTime] = useState('')
  const [price, setPrice] = useState('')
  const [capacity, setCapacity] = useState('1')
  const [account1, setAccount1] = useState('신한은행')
  const [account2, setAccount2] = useState('')
  const [username, setUsername] = useState('');
  const [writer, setWriter] = useState('');

  const navi = useNavigate()

  const sets = {
    setTitle,
    setContent,
    setLocation,
    setAddress,
    setLiveDate,
    setLiveStTime,
    setLiveEndTime,
    setPrice,
    setCapacity,
    setAccount1,
    setAccount2,
    title,
    writer,
    username,
    content,
    location,
    address,
    liveDate,
    liveStTime,
    liveEndTime,
    price,
    capacity,
    account1,
    account2
  }


  const insertHandler = async () => {

    function check(regExp, element, msg) {
      if (regExp.test(element)) {
        return true
      }
      window.alert(msg)
      return false
    }

    let msg = ''

    let titleCheck = /^.{3,45}$/
    msg = '제목은 3 ~ 45 글자 사이로 작성해주십시오.'
    if (!check(titleCheck, title, msg)) return


    let addressCheck = /^.{5,20}$/
    msg = '주소는 5 ~ 20 글자 사이로 작성해주십시오.'
    if (!check(addressCheck, address, msg)) return

    let account2Check = /^.{10,20}$/
    msg = '계좌번호는 알맞은 형태로 작성해주십시오.'
    if (!check(account2Check, account2, msg)) return

    let priceCheck = /^\d{1,8}$/
    msg = '가격은 8자릿수 안의 정수로 입력해주십시오'
    if (!check(priceCheck, price, msg)) return

    // console.log(sets)
    if(!window.confirm(`팀 모집 게시글을 등록하시겠습니까?`)) return
    const response = await teamApi.teamInsert(sets)
    const data = await response.data
    if (data != null) {
      navi(`/team/${data}`)
    } else {
      navi(`/teamList`)
    }
  }



  // 권한 설정 관련 (이게 기준이다.)
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const getUserInfo = () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(!roles.isUser || roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi("/liveBoard");
      return;
    }
    return true;
  };

  useEffect(() => {
    // 권한 관련 설정
    getUserInfo()
    if (userInfo && userInfo.username) {
      setUsername(userInfo.username);
      setWriter(userInfo.nickname);
    }
  }, [userInfo, isLogin]);

  return (
    <>
      <TeamInsert sets={sets} insertHandler={insertHandler}></TeamInsert>
    </>
  )
}

export default TeamInsertContainer