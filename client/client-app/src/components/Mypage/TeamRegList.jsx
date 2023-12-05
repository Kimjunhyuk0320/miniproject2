import React from 'react'
import * as format from '../../apis/format/format'
import { Link } from 'react-router-dom'

const TeamRegList = ({ sets,tllList }) => {

  tllList = tllList ?? []

  return (
    <>
      <div id="topContent">
        <h1>팀 모집 현황</h1>
        <p>어떤 팀과 공연을 진행할까요? 함께할 팀과 함께 멋진 공연을 만들어주세요!</p>
        <hr />
      </div>

      <div id="teamListContainer">
        <div className="tableContainer">
          <table style={{marginBottom:'100px'}}>
            <thead>
              <tr>
                <th width="120">모집글 번호</th>
                <th width="280">제목</th>
                <th width="120">연락처</th>
                <th width="100">신청일자</th>
                <th width="110">작성자 아이디</th>
                <th width="100">승인여부</th>
                <th width="100">입금여부</th>
                <th width="100">입금확인</th>
                <th width="80">승인</th>
                <th width="80">거절</th>
              </tr>
            </thead>
            <tbody>
              {
                tllList.length === 0 && (
                  <tr>
                    <td colSpan="10">조회된 내역이 없습니다.</td>
                  </tr>
                )
              }
              {
                tllList && tllList.map((tll) => (
                      <tr className="read-app-list-row">

                        <td>{tll.teamNo}</td>
                        <Link to={`/myPage/readApp${tll.appNo}`}>
                          <td>{tll.title}</td>
                        </Link>
                        <td>{tll.phone}</td>
                        <td>
                          {
                            format.formatDate(tll.updDate)
                          }
                        </td>
                        <td>
                          {tll.username}
                        </td>
                        {tll.approvalStatus === 0 && <td>미확인</td>}
                        {tll.approvalStatus === 1 && <td>승인</td>}
                        {tll.approvalStatus === 2 && <td>거절</td>}
                        {tll.depositStatus === 1 && <td>입금확정</td>}
                        {tll.depositStatus === 0 && <td>미입금</td>}


                        <td>
                          {tll.approvalStatus === 1 && tll.depositStatus === 0 && <input type="button" value="입금확인" className="btn-cancel" onClick={() => {
                            sets.confirmed(tll.appNo)
                          }} />}

                        </td>

                        <td>
                          {tll.approvalStatus === 0 && <input type="button"value="참가승인" className="btn-cancel" onClick={() => {
                            sets.accept(tll.appNo)
                          }} />}
                        </td>

                        <td>
                          {tll.approvalStatus === 0 && <input type="button" value="참가거절" className="btn-cancel" onClick={() => {
                            sets.denied(tll.appNo)
                          }} />}
                        </td>

                      </tr>
                  )
                )

              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TeamRegList