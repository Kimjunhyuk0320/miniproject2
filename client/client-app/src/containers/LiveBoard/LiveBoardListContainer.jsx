import React, { useEffect, useState } from 'react'
import PageBox from '../../components/LiveBoard/PageBox'
import CardList from '../../components/LiveBoard/CardList'
import Pagenation from '../../components/LiveBoard/Pagenation'
import * as liveBoards from '../../apis/liveBoardApi'
const LiveBoardListContainer = () => {
  const [pageNo, setPage] = useState(1);
  const [rows, setRows] = useState(8);
  const [pageCount, setPageCount] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [searchType, setSearchType] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState(0);
  const [liveBoardList, setLiveBoardList] = useState([])
  const [pageInfo, setPageInfo] = useState([])

  const getLiveBoardList = async () => {
    const response = await liveBoards.getPageList(pageNo, rows, searchType, keyword, order);
    const data = await response.data
    console.log(data)
    setLiveBoardList(data)
  }

  const initPage = async () => {
    const response = await liveBoards.initPage(pageNo, rows, pageCount, totalCount, searchType, keyword)
    const data = await response.data
    console.log(data)
    setPageInfo(data)
  }

  // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
  useEffect(()=>{
    getLiveBoardList()
    initPage();
  },[pageNo, keyword, order, rows])
 






  return (
    <div>
      <h1>LiveBoardListContainer</h1>
      <PageBox rows={rows} setRows={setRows} searchType={searchType} setSearchType={setSearchType} setKeyword={setKeyword}
                order={order} setOrder={setOrder} />
      <CardList liveBoardList={liveBoardList}/>
      <Pagenation pageInfo={pageInfo} />
    </div>
  )
}

export default LiveBoardListContainer