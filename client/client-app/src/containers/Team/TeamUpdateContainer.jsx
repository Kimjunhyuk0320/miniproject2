import React, { useContext, useEffect, useState } from 'react'
import TeamUpdate from '../../components/Team/TeamUpdate'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'
import { LoginContext } from '../../contexts/LoginContextProvider'

const TeamUpdateContainer = ({ teamNo }) => {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [liveDate, setLiveDate] = useState('')
  const [liveStTime, setLiveStTime] = useState('')
  const [liveEndTime, setLiveEndTime] = useState('')
  const [price, setPrice] = useState('')
  const [capacity, setCapacity] = useState('')
  const [account1, setAccount1] = useState('')
  const [account2, setAccount2] = useState('')

  const navi = useNavigate()


  const getUpTeam = async () => {

    const response = await teamApi.teamRead(teamNo)
    const data = await response.data
    setTitle(data.title)
    setWriter(data.writer)
    setContent(data.content)
    setLocation(data.location)
    setAddress(data.address)
    setLiveDate(data.liveDate)
    setLiveStTime(data.liveStTime)
    setLiveEndTime(data.liveEndTime)
    setPrice(data.price)
    setCapacity(data.capacity)
    setAccount1(data.account.split('/')[0])
    setAccount2(data.account.split('/')[1])
    if (data.recStatus > 0) {
      // window.alert(`참가가 확정된 밴드팀이 있어 수정이 불가능합니다!`)
      navi(`/team/${teamNo}`)
    }
    // console.log(data)
  }

  const updateHandler = async (team) => {

    let msg = ''

    function check(regExp, element, msg) {

      if (regExp.test(element)) {
        return true
      }
      alert(msg)
      return false
    }

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

    // console.log(team)
    if (!window.confirm(`수정사항을 등록하시겠습니까?`)) return

    const response = await teamApi.teamUpdate(team)
    const data = await response.data
    if (data != null) {
      navi(`/team/${teamNo}`)
    } else {
      navi(`/team/update/${teamNo}`)
    }
  }

  const updateHandler2 = () => {
    updateHandler(team);
  }
  const sets = {
    setTitle,
    setWriter,
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

  const team = {
    title,
    writer,
    content,
    location,
    address,
    liveDate,
    liveStTime,
    liveEndTime,
    price,
    capacity,
    account1,
    account2,
    teamNo
  }

  const { isLogin, roles, userInfo } = useContext(LoginContext);

  // 권한 정보 설정
  const getUserInfo = () => {
    if (!userInfo) {
      navi("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(roles.isUser || roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navi("/liveBoard");
      return;
    }
    return true;
  };


  useEffect(() => {
    // console.log(teamNo)
    getUpTeam()
    getUserInfo()
  }, [userInfo, isLogin])

  return (
    <>
      <TeamUpdate sets={sets} updateHandler2={updateHandler2}></TeamUpdate>
    </>
  )
}

export default TeamUpdateContainer