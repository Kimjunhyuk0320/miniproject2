import React, { useContext, useEffect, useState } from 'react'
import PageBox from '../../components/LiveBoard/PageBox'
import CardList from '../../components/LiveBoard/CardList'
import Pagenation from '../../components/LiveBoard/Pagenation'
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
import UserContext from '../../context/UserContext'

const LiveBoardListContainer = () => {
  const { jwtSets } = useContext(UserContext)
  const [pageNo, setPageNo] = useState(1);
  const [rows, setRows] = useState(8);
  const pageCount = 10
  const totalCount = 0
  const [searchType, setSearchType] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState(0);
  const [liveBoardList, setLiveBoardList] = useState([])
  const [pageInfo, setPageInfo] = useState([])

  const getLiveBoardList = async () => {
    const response = await liveBoards.getPageList(pageNo, rows, searchType, keyword, order, jwtSets.jwtToken);
    const data = await response.data
    setLiveBoardList(data)
  }

  const initPage = async () => {
    const response = await liveBoards.initPage(pageNo, rows, pageCount, totalCount, searchType, keyword, jwtSets.jwtToken)
    const data = await response.data
    setPageInfo(data)
  }

  // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
  useEffect(() => {
    getLiveBoardList()
    initPage();
  }, [pageNo, keyword, order, rows])



  return (
    <div id="teamListContainer">
      <PageBox rows={rows} setRows={setRows} searchType={searchType} setSearchType={setSearchType} setKeyword={setKeyword}
        order={order} setOrder={setOrder} setPageNo={setPageNo} />
      <CardList liveBoardList={liveBoardList} />
      <Pagenation pageInfo={pageInfo} setPageNo={setPageNo} />
    </div>
  )
}

export default LiveBoardListContainer