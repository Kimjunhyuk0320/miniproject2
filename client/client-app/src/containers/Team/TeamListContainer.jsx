import React, { useEffect, useState } from 'react'
import TeamList from '../../components/Team/TeamList'
import * as teamApi from '../../apis/Team/TeamApi'
import TeamPagenation from '../../components/Team/TeamPagenation'

const TeamListContainer = () => {

    const initPageInfo = {
      pageNo : 1,
      rows : 10,
      pageCount : 10,
      totalCount : 0,
      searchType : 0,
      keyword : '',
      order: 0
    }
    const [pagenation,setPagenation] = useState([])
    const [teamList,setTeamList] = useState([])
    const [pageInfo, setPageInfo] = useState(initPageInfo)
    
    const handlePage = () => {

    }

    const team = {
      pageNo:pageInfo.pageNo,
      rows:pageInfo.rows,
      searchType:pageInfo.searchType,
      keyword:pageInfo.keyword,
      order:pageInfo.order
    }
    
    const getTeamList = async (pageInfo,team)=>{
      const responsePage = await teamApi.pageInfo(pageInfo)
      const {startPage,endPage,firstPage,lastPage,prev,next,totalCount} = await responsePage.json()
      setPagenation({
        startPage,
        endPage,
        firstPage,
        lastPage,
        prev,
        next,
        totalCount})
        
      const responseList = await teamApi.teamList(team);
      const dataList = await responseList.json()
      setTeamList(dataList)
    }

    useEffect(()=>{
      getTeamList(pageInfo,team)
    },[pageInfo])

    const pageNoHandler = (e)=>{
      // setPageNo(e.target.dataset.data)
    }

  return (
    <>
        <h1>{pagenation.totalCount}</h1>
        <TeamList teamList={teamList}></TeamList>
        <TeamPagenation pagenation={pagenation}></TeamPagenation>
    </>
  )
}

export default TeamListContainer