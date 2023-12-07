import React from 'react'
import TeamRegReadContainer from '../../containers/MyPage/TeamRegReadContainer'
import { useParams } from 'react-router-dom'

const TeamRegReadPage = () => {

    const {appNo} = useParams()

  return (
    <>
        <TeamRegReadContainer appNo={appNo}></TeamRegReadContainer>
    </>
  )
}

export default TeamRegReadPage