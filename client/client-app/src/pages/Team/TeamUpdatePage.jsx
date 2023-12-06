import React from 'react'
import { useParams } from 'react-router-dom'
import TeamUpdate from '../../components/Team/TeamUpdate'
import './css/update.css'
const TeamUpdatePage = () => {
    const {teamNo} = useParams()

  return (
    <div className='TeamUpdatePage'>
    <TeamUpdate teamNo={teamNo}></TeamUpdate>
    </div>
  )
}

export default TeamUpdatePage