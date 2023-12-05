import React from 'react'
import { useParams } from 'react-router-dom'
import TeamReadContainer from '../../containers/Team/TeamReadContainer'
import CommentContainer from '../../containers/comment/CommentContainer'

const TeamReadPage = () => {
    const {teamNo} = useParams()
    const parentTable = 'team_recruitments'

  return (
    <>
        <TeamReadContainer teamNo={teamNo}></TeamReadContainer>
        <CommentContainer no={teamNo} parentTable={parentTable}></CommentContainer>
    </>
  )
}

export default TeamReadPage