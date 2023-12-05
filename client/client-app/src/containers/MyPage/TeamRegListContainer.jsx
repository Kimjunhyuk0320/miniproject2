import React, { useEffect, useState } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamRegList from '../../components/Mypage/TeamRegList'
import { useNavigate } from 'react-router-dom'

const TeamRegListContainer = ({username}) => {

    
    const [tllList, setTllList] = useState([])

    const navi = useNavigate()
  
    const getTllList = async () => {
      const response = await teamAppApi.teamAppListByLeader(username);
      const data = await response.data
      console.log(data)
      setTllList(data)
    }

    const accHandler = async (appNo)=>{
        const response = await teamAppApi.accept({appNo})
        const data = await response.data
        navi(`/tllList`)
    }

    const dniHandler = async (appNo)=>{
        const response = await teamAppApi.denied({appNo})
        const data = await response.data
        navi(`/tllList`)
    }

    const conHandler = async (appNo)=>{
        const response = await teamAppApi.confirmed({appNo})
        const data = await response.data
        navi(`/tllList`)
    }
  
    useEffect(()=>{
      console.log(`useEffect start`)
      getTllList()
    },[])

    const sets = {
        accHandler,
        dniHandler,
        conHandler,
    }

  return (
    <>
        <TeamRegList sets={sets} tllList={tllList}></TeamRegList>
    </>
  )
}

export default TeamRegListContainer