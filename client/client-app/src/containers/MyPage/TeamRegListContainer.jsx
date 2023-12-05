import React, { useEffect, useState } from 'react'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamRegList from '../../components/Mypage/TeamRegList'
import { useNavigate } from 'react-router-dom'

const TeamRegListContainer = () => {

    
    const [tllList, setTllFrList] = useState([])
    const username = 'gangjinsu'

    const navi = useNavigate()
  
    const getTllList = async () => {
      const response = await teamAppApi.teamAppListByLeader({username});
      const data = await response.data
      console.log(data)
      setTllFrList(data)
      console.log(tllList)
    }

    const accHandler = async (appNo)=>{
        const response = await teamAppApi.accept(appNo)
        const data = await response.data
        navi(`/tllList`)
    }
  
    // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
    useEffect(()=>{
      getTllList()
    },[])

    const sets = {
        tllList,
    }

  return (
    <>
        <TeamRegList sets={sets}></TeamRegList>
    </>
  )
}

export default TeamRegListContainer