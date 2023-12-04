import React from 'react'
import { Link } from 'react-router-dom'
const Pagenation = ({pageInfo, setPageNo}) => {
  let start = pageInfo.startPage
  let end = pageInfo.endPage
  let first = pageInfo.firstPage
  let last = pageInfo.lastPage
  let prev = pageInfo.prev
  let next = pageInfo.next


  const myArray = Array.from({ length: end - start + 1 }, (_, index) => index + start);


  const clickPage = (page) => {
    setPageNo(page)
  }




  return (
    <div>Pagenation
       <div id="paginationContainer">
            <div className="pagination_count">
                <Link className="page-arrow" id="first" onClick={()=>{clickPage(first)}}>
                    <img src="/img/left_B.png" width="15px" alt='공연 이미지'/>
                </Link>
                <Link className="page-arrow" id="prev" onClick={()=>{clickPage(prev)}} >&lsaquo;</Link>
            
                <div className="page-list">
                  {myArray.map((number)=>(
                    <Link key={number} className="page-no" onClick={()=>{clickPage(number)}}>{number}</Link>
                  ))
                  }
                </div>
            
                <Link  className="page-arrow" id="next" onClick={()=>{clickPage(next)}}>&rsaquo;</Link>
                <Link  className="page-arrow" id="last" onClick={()=>{clickPage(last)}}>
                    <img src="/img/right_B.png" width="15px"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Pagenation