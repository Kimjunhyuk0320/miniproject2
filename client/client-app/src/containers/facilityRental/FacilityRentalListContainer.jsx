import React, { useEffect, useState } from 'react'
import FacilityRentalList from '../../components/facilityRental/FacilityRentalList'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'
import TeamPagenation from '../../components/Team/TeamPagenation';
import FrPageBox from '../../components/facilityRental/FrPageBox';

const FacilityRentalListContainer = () => {

    const [pageNo, setPage] = useState(1);
    const [rows, setRows] = useState(8);
    const [pageCount, setPageCount] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [searchType, setSearchType] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [order, setOrder] = useState(0);
    const [frList, setFrList] = useState([])
    const [pageInfo, setPageInfo] = useState([])
  
    const getFrList = async () => {
      const response = await frApi.frList({pageNo, rows, searchType, keyword, order});
      const data = await response.data
      console.log(data)
      setFrList(data)
      console.log(frList)
    }
  
    const initPage = async () => {
      const response = await frApi.pageInfo({pageNo, rows, pageCount, totalCount, searchType, keyword})
      const data = await response.data
      console.log(data)
      setPageInfo(data)
    }
  
    // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
    useEffect(()=>{
      getFrList()
      initPage()
    },[pageNo, keyword, order, rows])

  return (
    <>
    <FrPageBox rows={rows}
         setRows={setRows}
         order={order}
         setOrder={setOrder}
         keyword={keyword}
         setKeyword={setKeyword}
         searchType={searchType}
         setSearchType={setSearchType}>
    </FrPageBox>
    <FacilityRentalList frList={frList}></FacilityRentalList>
    <TeamPagenation pageInfo={pageInfo} setPage={setPage}></TeamPagenation>
    </>
  )
}

export default FacilityRentalListContainer