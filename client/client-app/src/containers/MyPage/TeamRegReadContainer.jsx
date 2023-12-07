import React, { useEffect, useState } from 'react'
import TeamRegRead from '../../components/Mypage/TeamRegRead'
import { useNavigate } from 'react-router-dom'
import * as teamAppApi from '../../apis/Team/TeamAppApi'

const TeamRegReadContainer = ({appNo}) => {

    const [teamApp, setTeamApp] = useState({})
  
    const getTeamApp = async () =>{
      const response = await teamAppApi.readApp(appNo)
      const data = await response.data
      // console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
      // console.log(data)
      setTeamApp(data)
    }
  
    useEffect(()=>{
        getTeamApp()
    },[])

  return (
    <>
    <TeamRegRead teamApp={teamApp}></TeamRegRead>
    </>
  )
}

export default TeamRegReadContainer