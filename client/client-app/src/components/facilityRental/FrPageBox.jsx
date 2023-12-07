import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FrPageBox = ({rows,setRows,order,setOrder,keyword,setKeyword,searchType,setSearchType}) => {
    
    const [inputValue, setInputValue] = useState('')

  return (
    <>
        <div id="topContent">
            <h1>클럽 대관 목록</h1>
            <p>클럽 대관 목록입니다.</p>
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
                        <Link className="btn" id="btn-search" onClick={()=>{
                            setKeyword(inputValue)
                        }
                        }>
                            <img src="https://www.dacorkorea.com/images/icon-search.png" alt="search"
                                style={{width:'23px',paddingTop:'5px'}}/>
                        </Link>

                    </div>
                </div>
                <div className="item">
                        <Link to="/fr/insert">
                            <button id="filter-btn">작성하기</button>
                        </Link>
                    <select name="rows" id="rows" className="input-search" value={rows} onChange={
                        (e)=>{
                            setRows(e.target.value)
                        }
                    }>
                        <option value="4">4개씩 보기</option>
                        <option value="8">8개씩 보기</option>
                        <option value="32">32개씩 보기</option>
                        <option value="64">64개씩 보기</option>
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

export default FrPageBox