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

    const readApp = async (appNo)=>{
        const response = await teamAppApi.readApp({appNo})
        const data = await response.data
        navi(`/tllList`)
    }
  
    // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
    useEffect(()=>{
      console.log(`useEffect start`)
      //ㅅㅂ이거안됨
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