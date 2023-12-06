import React from 'react'
import { useParams } from 'react-router-dom'
import TeamUpdateContainer from '../../containers/Team/TeamUpdateContainer'
import './css/update.css'
const TeamUpdatePage = () => {
    const {teamNo} = useParams()

  return (
    <div className='TeamUpdatePage'>
    <TeamUpdateContainer teamNo={teamNo}></TeamUpdateContainer>
    </div>
  )
}

export default TeamUpdatePage