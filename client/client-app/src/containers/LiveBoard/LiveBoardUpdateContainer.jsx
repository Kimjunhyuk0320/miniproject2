import React, { useContext, useEffect, useState } from 'react'
import UpdateForm from '../../components/LiveBoard/UpdateForm'
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
import UserContext from '../../context/UserContext'


const LiveBoardUpdateContainer = ({ no }) => {
  const { jwtSets } = useContext(UserContext)
  const [liveBoard, setLiveBoard] = useState({})

  const getLiveBoard = async () => {
    const response = await liveBoards.getPage(no, jwtSets.jwtToken);
    const data = await response.data
    setLiveBoard(data)
  }

  useEffect(() => {
    getLiveBoard()

  }, [])



  return (
    <div>
      <UpdateForm liveBoard={liveBoard} />
    </div>
  )
}

export default LiveBoardUpdateContainer