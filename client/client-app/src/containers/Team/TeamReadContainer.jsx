import React, { useEffect, useState } from 'react'
import TeamRead from '../../components/Team/TeamRead'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'

const TeamReadContainer = ({teamNo}) => {
  const [team, setTeam] = useState({})
  const navi = useNavigate()

  const getTeam = async (teamNo) =>{
    const response = await teamApi.teamRead(teamNo)
    const data = await response.data
    // console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    // console.log(data)
    setTeam(data)
  }

  const delHandler = async ()=>{
    if(!window.confirm(`정말로 삭제하시겠습니까?`)) return
    const response = await teamApi.teamDelete(teamNo)
    const data = await response.data
    if(data>0){
      navi('/teamList')
    }else{
      window.alert(`참가가 확정된 밴드팀이 있어 삭제가 불가능합니다!`)
      getTeam(teamNo)
      navi(`/team/${teamNo}`)
    }
  }

  useEffect(()=>{
    getTeam(teamNo)
  },[teamNo])
  // },[])

  return (
    <>
        <TeamRead team={team} delHandler={delHandler}></TeamRead>
        
    </>
  )
}

export default TeamReadContainer