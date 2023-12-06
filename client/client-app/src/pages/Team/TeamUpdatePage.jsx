import React from 'react'
import { useParams } from 'react-router-dom'
import TeamUpdateContainer from '../../containers/Team/TeamUpdateContainer'

const TeamUpdatePage = () => {
    const {teamNo} = useParams()

  return (
    <>
    <TeamUpdateContainer teamNo={teamNo}></TeamUpdateContainer>
    </>
  )
}

export default TeamUpdatePage