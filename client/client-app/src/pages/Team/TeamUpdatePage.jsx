import React from 'react'
import { useParams } from 'react-router-dom'
import TeamUpdate from '../../components/Team/TeamUpdate'

const TeamUpdatePage = () => {
    const {teamNo} = useParams()

  return (
    <>
    <TeamUpdate teamNo={teamNo}></TeamUpdate>
    </>
  )
}

export default TeamUpdatePage