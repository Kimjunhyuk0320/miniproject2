import React from 'react'
import TeamRegListContainer from '../../containers/MyPage/TeamRegListContainer'
import './css/teamList.css'
const TeamRegListPage = () => {
    const username = 'gangjinsu'
  return (
    <div className='teamList'>
        <TeamRegListContainer username={username}></TeamRegListContainer>
    </div>
  )
}

export default TeamRegListPage