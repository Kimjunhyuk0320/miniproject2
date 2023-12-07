import React, { useEffect, useState } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamMyRegList from '../../components/Mypage/TeamMyRegList'
import { useNavigate } from 'react-router-dom'

const TeamMyRegListContainer = ({username}) => {

    
    const [tlmList, setTlmList] = useState([])

    const navi = useNavigate()
  
    const getTlmList = async () => {
      const response = await teamAppApi.teamAppListByMember(username)
      const data = await response.data
      console.log(data)
      setTlmList(data)
    }

    const delHandler = async (appNo)=>{
        const response = await teamAppApi.delApp(appNo)
        const data = await response.data
        navi(`/mypage/tlmList`)
        getTlmList()
    }
  
    useEffect(()=>{
      getTlmList()
    },[])

    const sets = {
        delHandler,
    }

  return (
    <>
        <TeamMyRegList sets={sets} tlmList={tlmList}></TeamMyRegList>
    </>
  )
}

export default TeamMyRegListContainer