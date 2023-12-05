import React from 'react'
import TeamRegListContainer from '../../containers/MyPage/TeamRegListContainer'

const TeamRegListPage = () => {
    const username = 'gangjinsu'
  return (
    <>
        <TeamRegListContainer username = {username}></TeamRegListContainer>
    </>
  )
}

export default TeamRegListPage