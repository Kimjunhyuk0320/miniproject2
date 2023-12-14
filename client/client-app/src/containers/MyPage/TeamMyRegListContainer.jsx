import React, { useContext, useEffect, useState } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamMyRegList from '../../components/Mypage/TeamMyRegList'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

const TeamMyRegListContainer = ({ username }) => {
  const { jwtSets } = useContext(UserContext)


  const [tlmList, setTlmList] = useState([])

  const navi = useNavigate()

  const getTlmList = async () => {
    const response = await teamAppApi.teamAppListByMember(username, jwtSets.jwtToken)
    const data = await response.data
    console.log(data)
    setTlmList(data)
  }

  const delHandler = async (appNo) => {
    if (!window.confirm(`정말로 신청을 취소하시겠습니까?`)) return
    const response = await teamAppApi.delApp(appNo, jwtSets.jwtToken)
    const data = await response.data
    navi(`/mypage/tlmList`)
    getTlmList()
  }

  useEffect(() => {
    getTlmList()
  }, [])

  const sets = {
    delHandler,
  }

  return (
    <>
      <TeamMyRegList sets={sets} tlmList={tlmList}></TeamMyRegList>
    </>
  )
}

export default TeamMyRegListContainer