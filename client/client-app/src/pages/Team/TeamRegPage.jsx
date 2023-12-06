import React from 'react'
import TeamRegContainer from '../../containers/Team/TeamRegContainer';
import { useParams } from 'react-router-dom';
import './css/update.css'
const TeamRegPage = () => {
    const {teamNo} = useParams();
  return (
    <div className='TeamUpdatePage'>
    <TeamRegContainer teamNo={teamNo}></TeamRegContainer>
    </div>
  )
}

export default TeamRegPage