import React, { useEffect, useState } from 'react'
import TeamConfirmedLiveList from '../../components/Team/TeamConfirmedLiveList'
import * as teamAppApi from '../../apis/Team/TeamAppApi'
import TeamClPageBox from '../../components/Team/TeamClPageBox';
import TeamPagenation from '../../components/Team/TeamPagenation';

const TeamConfirmedLiveListContainer = ({username}) => {


    const [pageNo, setPage] = useState(1);
    const [rows, setRows] = useState(10);
    const [pageCount, setPageCount] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [searchType, setSearchType] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [order, setOrder] = useState(0);
    const [clList, setClList] = useState([])
    const [pageInfo, setPageInfo] = useState([])

    const getClList = async () => {
        const response = await teamAppApi.confirmedLiveList({pageNo, rows, pageCount, totalCount, searchType,order, keyword, username});
        const data = await response.data
        // console.log(data)
        setClList(data)
    }

    const initPage = async () => {
        const response = await teamAppApi.confirmedPageInfo({ pageNo, rows, pageCount, totalCount, searchType, keyword,order, username });
        const data = await response.data
        // console.log(data)
        setPageInfo(data)
    }

    // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
    useEffect(() => {
        getClList()
        initPage()
    }, [pageNo, keyword, order, rows])


return (
    <>
        <TeamClPageBox rows={rows}
            setRows={setRows}
            order={order}
            setOrder={setOrder}
            keyword={keyword}
            setKeyword={setKeyword}
            searchType={searchType}
            setSearchType={setSearchType}></TeamClPageBox>
        <TeamConfirmedLiveList clList={clList}></TeamConfirmedLiveList>
        <TeamPagenation pageInfo={pageInfo} setPage={setPage}></TeamPagenation>
    </>
)
}

export default TeamConfirmedLiveListContainer