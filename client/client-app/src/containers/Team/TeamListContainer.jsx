import React, { useEffect, useState } from 'react'
import TeamList from '../../components/Team/TeamList'
import * as teamApi from '../../apis/Team/TeamApi'
import TeamPagenation from '../../components/Team/TeamPagenation'
import TeamPageBox from '../../components/Team/TeamPageBox'

const TeamListContainer = () => {

    // const initPageInfo = {
    //   pageNo : 1,
    //   rows : 10,
    //   pageCount : 10,
    //   totalCount : 0,
    //   searchType : 0,
    //   keyword : '',
    //   order: 0
    // }
    // const [pagenation,setPagenation] = useState([])
    // const [teamList,setTeamList] = useState([])
    // const [pageInfo, setPageInfo] = useState(initPageInfo)
    
    // const handlePage = () => {

    // }

    // const team = {
    //   pageNo:pageInfo.pageNo,
    //   rows:pageInfo.rows,
    //   searchType:pageInfo.searchType,
    //   keyword:pageInfo.keyword,
    //   order:pageInfo.order
    // }
    
    // const getTeamList = async (pageInfo,team)=>{
    //   const responsePage = await teamApi.pageInfo(pageInfo)
    //   const {startPage,endPage,firstPage,lastPage,prev,next,totalCount} = await responsePage.json()
    //   setPagenation({
    //     startPage,
    //     endPage,
    //     firstPage,
    //     lastPage,
    //     prev,
    //     next,
    //     totalCount})
        
    //   const responseList = await teamApi.teamList(team);
    //   const dataList = await responseList.json()
    //   setTeamList(dataList)
    // }

    // useEffect(()=>{
    //   getTeamList(pageInfo,team)
    // },[pageInfo])

    const [pageNo, setPage] = useState(1);
    const [rows, setRows] = useState(10);
    const [pageCount, setPageCount] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [searchType, setSearchType] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [order, setOrder] = useState(0);
    const [teamList, setTeamList] = useState([])
    const [pageInfo, setPageInfo] = useState([])
  
    const getTeamList = async () => {
      const response = await teamApi.teamList({pageNo, rows, searchType, keyword, order});
      const data = await response.data
      // console.log(data)
      setTeamList(data)
    }
  
    const initPage = async () => {
      const response = await teamApi.pageInfo({pageNo, rows, pageCount, totalCount, searchType, keyword})
      const data = await response.data
      // console.log(data)
      setPageInfo(data)
    }
  
    // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
    useEffect(()=>{
      getTeamList()
      initPage()
    },[pageNo, keyword, order, rows])

  return (
    <>
        <TeamPageBox rows={rows}
         setRows={setRows}
         order={order}
         setOrder={setOrder}
         keyword={keyword}
         setKeyword={setKeyword}
         searchType={searchType}
         setSearchType={setSearchType}></TeamPageBox>
        <TeamList teamList={teamList}></TeamList>
        <TeamPagenation pageInfo={pageInfo} setPage={setPage}></TeamPagenation>
    </>
  )
}

export default TeamListContainer