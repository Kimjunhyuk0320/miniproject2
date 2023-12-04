import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TeamPageBox = ({rows,setRows,order,setOrder,keyword,setKeyword,searchType,setSearchType}) => {
    
    const [inputValue, setInputValue] = useState('')

  return (
    <>
        <div id="topContent">
            <h1>공연팀 모집</h1>
            <p>공연팀 모집에 대한 소식을 알려드립니다.</p>
            <hr/>
        </div>

        <div id="teamListContainer">
            <div className="page-box">
                <div className="item">
                    <div className="search_item">
                        <select name="search-type" id="search-type" className="input-search" value={searchType} onChange={(e)=>{
                            setSearchType(e.target.value)
                        }}>
                            <option value="0">전체</option>
                            <option value="1">제목</option>
                            <option value="2">내용</option>
                            <option value="3">제목+내용</option>
                            <option value="4">작성자</option>
                        </select>
                        <input type="text" name="keyword" id="keyword" className="input-search" placeholder="여기에 검색해보세요" value={inputValue} onChange={
                             (e) => {
                                setInputValue(e.target.value)
                              }
                        }/>
                        <a href="javascript:;" className="btn" id="btn-search" onClick={()=>{
                            setKeyword(inputValue)
                        }
                        }>
                            <img src="https://www.dacorkorea.com/images/icon-search.png" alt="search"
                                style={{width:'23px',paddingTop:'5px'}}/>
                        </a>

                    </div>
                </div>
                <div className="item">
                        <Link to="/team/insert">
                            <button id="filter-btn">작성하기</button>
                        </Link>
                    <select name="rows" id="rows" className="input-search" value={rows} onChange={
                        (e)=>{
                            setRows(e.target.value)
                        }
                    }>
                        <option value="5">5개씩 보기</option>
                        <option value="10">10개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                    </select>
                    <select name="order" id="order" className="input-search" value={order} onChange={
                        (e)=>{
                            setOrder(e.target.value)
                        }
                    }>
                        <option value="0">최근 순</option>
                        <option value="1">오래된 순</option>
                        <option value="2">조회수 순</option>
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}

export default TeamPageBox