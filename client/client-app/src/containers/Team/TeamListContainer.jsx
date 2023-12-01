import React, { useEffect, useState } from 'react'
import TeamList from '../../components/Team/TeamList'
import * as teamApi from '../../apis/Team/TeamApi'
import TeamPagenation from '../../components/Team/TeamPagenation'

const TeamListContainer = () => {

    const initPageInfo = {
      pageNo : 1,
      rows : 10,
      pageCount : 10,
      totalCount,
      searchType,
      keyword,
      order
    }
    const [pagenation,setPagenation] = useState([])
    const [teamList,setTeamList] = useState([])
    const [pageInfo, setPageInfo] = useState(initPageInfo)
    
    // pageNo, orws, serachType, keywor, order
    const handlePage = () => {
      // setPageInfo( {...pageInfo, keyword} )

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
      const {startPage,endPage,firstPage,lastPage,prev,next} = await responsePage.json()
      setPagenation({
        startPage,
        endPage,
        firstPage,
        lastPage,
        prev,
        next})
      const responseList = await teamApi.teamList(team);
      const dataList = await responseList.json()
      setTeamList(dataList)
    }

    useEffect(()=>{
      setPageInfo()
      getTeamList(pageInfo,team)
    },[pageInfo])

    const pageNoHandler = (e)=>{
      // setPageNo(e.target.dataset.data)
    }

  return (
    <>
        <TeamList teamList={teamList}></TeamList>
        <TeamPagenation pagenation={pagenation}></TeamPagenation>
    </>
  )
}

export default TeamListContainer