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
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log(data)
    setTeam(data)
  }

  const delHandler = async ()=>{
    const response = await teamApi.teamDelete(teamNo)
    const data = await response.data
    if(data!=null){
      navi('/teamList')
    }else{
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