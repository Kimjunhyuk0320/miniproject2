import React, { useContext, useEffect, useState } from 'react'
import TeamList from '../../components/Team/TeamList'
import * as teamApi from '../../apis/Team/TeamApi'
import TeamPagenation from '../../components/Team/TeamPagenation'
import TeamPageBox from '../../components/Team/TeamPageBox'
import UserContext from '../../context/UserContext'

const TeamListContainer = () => {

  const { jwtSets } = useContext(UserContext)

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
    const response = await teamApi.teamList({ pageNo, rows, searchType, keyword, order }, jwtSets.jwtToken);
    const data = await response.data
    console.log(data)
    setTeamList(data)
  }

  const initPage = async () => {
    const response = await teamApi.pageInfo({ pageNo, rows, pageCount, totalCount, searchType, keyword }, jwtSets.jwtToken)
    const data = await response.data
    console.log(data)
    setPageInfo(data)
  }

  // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
  useEffect(() => {
    getTeamList()
    initPage()
  }, [pageNo, keyword, order, rows])

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