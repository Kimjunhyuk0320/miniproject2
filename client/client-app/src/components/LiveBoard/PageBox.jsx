import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PageBox = ({rows, setRows, searchType, setSearchType, setKeyword, order, setOrder, setPageNo }) => {

  const handleChangeSearchType = (e) => {
    setSearchType(e.target.value)
  }


  const handleChangeRows = (e) => {
    setRows(e.target.value)
    setPageNo(1)
  }

  const handleChangeOrder = (e) => {
    setOrder(e.target.value)
    setPageNo(1)
  }

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const onClickPage = () => {
    setKeyword(inputValue)
    setPageNo(1)
  }
  const [inputValue, setInputValue] = useState('')




  return (
        <div className="page-box">
            <div className="item">
                <div className="search_item">
                    <select name="search-type" id="search-type" className="input-search" value={searchType} onChange={handleChangeSearchType}>
                        <option value="0">전체</option>
                        <option value="1">제목</option>
                        <option value="2">내용</option>
                        <option value="3">제목+내용</option>
                        <option value="4">작성자</option>
                    </select>
                    <input type="text" name="keyword" id="keyword" className="input-search" value={inputValue} onChange={handleChangeInputValue}/>
                    <Link className="btn" id="btn-search" onClick={onClickPage}>
                      <img src="https://www.dacorkorea.com/images/icon-search.png" alt="search" style={{ width: '23px', paddingTop: '5px' }} />
                    </Link>
                </div>
            </div>
            <div className="item">
                    <Link href="/liveBoard/insert"><button id="filter-btn">작성하기</button></Link>
                <select name="rows" id="rows" className="input-search" value={rows} onChange={handleChangeRows}>
                    <option value="4">4개씩 보기</option>
                    <option value="8">8개씩 보기</option>
                    <option value="32">32개씩 보기</option>
                    <option value="64">64개씩 보기</option>
                </select>
                <select name="order" id="order" className="input-search" value={order} onChange={handleChangeOrder}>
                    <option value="0">최근 순</option>
                    <option value="1">오래된 순</option>
                    <option value="2">가격 순</option>
                </select>
            </div>
        </div>
  )
}

export default PageBox