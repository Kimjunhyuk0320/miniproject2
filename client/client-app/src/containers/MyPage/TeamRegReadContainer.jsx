import React, { useContext, useEffect, useState } from 'react'
import TeamRegRead from '../../components/Mypage/TeamRegRead'
import { useNavigate } from 'react-router-dom'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import Usercontext from '../../context/UserContext'
import UserContext from '../../context/UserContext'

const TeamRegReadContainer = ({ appNo }) => {
  const { jwtSets } = useContext(UserContext)

  const [teamApp, setTeamApp] = useState({})

  const getTeamApp = async () => {
    const response = await teamAppApi.readApp(appNo,jwtSets.jwtToken)
    const data = await response.data
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    console.log(data)
    setTeamApp(data)
  }

  useEffect(() => {
    getTeamApp()
  }, [])

  return (
    <>
      <TeamRegRead teamApp={teamApp}></TeamRegRead>
    </>
  )
}

export default TeamRegReadContainer