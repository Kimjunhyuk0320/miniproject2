import React from 'react'
import TeamRegContainer from '../../containers/Team/TeamRegContainer';
import { useParams } from 'react-router-dom';

const TeamRegPage = () => {
    const {teamNo} = useParams();
  return (
    <>
    <TeamRegContainer teamNo={teamNo}></TeamRegContainer>
    </>
  )
}

export default TeamRegPage