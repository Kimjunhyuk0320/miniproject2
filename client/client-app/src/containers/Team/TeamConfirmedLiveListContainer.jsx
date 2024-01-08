import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as teamAppApi from "../../apis/Team/TeamAppApi";
import TeamClPageBox from "../../components/Team/TeamClPageBox";
import TeamConfirmedLiveList from "../../components/Team/TeamConfirmedLiveList";
import TeamPagenation from "../../components/Team/TeamPagenation";
import { LoginContext } from "../../contexts/LoginContextProvider";

const TeamConfirmedLiveListContainer = ({ username }) => {
  const [pageNo, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [searchType, setSearchType] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [order, setOrder] = useState(0);
  const [clList, setClList] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);

  const getClList = async () => {
    const response = await teamAppApi.confirmedLiveList({
      pageNo,
      rows,
      pageCount,
      totalCount,
      searchType,
      order,
      keyword,
      username,
    });
    const data = await response.data;
    // console.log(data)
    setClList(data);
  };

  const initPage = async () => {
    const response = await teamAppApi.confirmedPageInfo({
      pageNo,
      rows,
      pageCount,
      totalCount,
      searchType,
      keyword,
      order,
      username,
    });
    const data = await response.data;
    // console.log(data)
    setPageInfo(data);
  };

  // 권한 관련
  const { isLogin, roles, userInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  // 권한 설정 관련
  const getUserInfo = async () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    if (Object.keys(userInfo).length === 0) {
      return;
    }
    if (!(!roles.isUser || !roles.isBand || roles.isClub)) {
      alert("권한이 설정 되어있지 않아 접근할 수 없습니다.");
      navigate("/liveBoard");
      return;
    }
    return true;
  };

  // 현재 페이지가 변화했을 때,  검색을 눌렀을 때, 조회 순서가 변화했을때, 페이지당 게시글 수가 변화했을때 게시글 목록 조회 및 페이지네이션 변경
  // useEffect(() => {
  //     getClList()
  //     initPage()

  //     // 권한 관련
  //     if (!getUserInfo) return
  // }, [pageNo, keyword, order, rows, userInfo, isLogin])
  useEffect(() => {
    getUserInfo();
  }, [pageNo, keyword, order, rows, userInfo, isLogin, getUserInfo]);

  return (
    <>
      <TeamClPageBox
        rows={rows}
        setRows={setRows}
        order={order}
        setOrder={setOrder}
        keyword={keyword}
        setKeyword={setKeyword}
        searchType={searchType}
        setSearchType={setSearchType}
      ></TeamClPageBox>
      <TeamConfirmedLiveList clList={clList}></TeamConfirmedLiveList>
      <TeamPagenation pageInfo={pageInfo} setPage={setPage}></TeamPagenation>
    </>
  );
};

export default TeamConfirmedLiveListContainer;
