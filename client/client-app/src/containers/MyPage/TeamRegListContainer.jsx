import React, { useEffect, useState } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamRegList from '../../components/Mypage/TeamRegList'
import { useNavigate } from 'react-router-dom'

const TeamRegListContainer = ({ username }) => {


  const [tllList, setTllList] = useState([])

  const navi = useNavigate()

  const getTllList = async () => {
    const response = await teamAppApi.teamAppListByLeader(username);
    const data = await response.data
    console.log(data)
    setTllList(data)
  }

  const accHandler = async (appNo) => {
    if (!window.confirm(`정말로 승인처리하시겠습니까?`)) return
    const response = await teamAppApi.accept({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  const dniHandler = async (appNo) => {
    if (!window.confirm(`정말로 거절처리하시겠습니까?`)) return
    const response = await teamAppApi.denied({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  const conHandler = async (appNo) => {
    if (!window.confirm(`정말로 입금 및 참가확정을 진행하시겠습니까?`)) return
    const response = await teamAppApi.confirmed({ appNo })
    const data = await response.data
    navi(`/mypage/tllList`)
    getTllList()
  }

  useEffect(() => {
    console.log(`useEffect start`)
    getTllList()
  }, [])

  const sets = {
    accHandler,
    dniHandler,
    conHandler,
  }

  return (
    <>
      <TeamRegList sets={sets} tllList={tllList}></TeamRegList>
    </>
  )
}

export default TeamRegListContainer