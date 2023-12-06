import React from 'react'
import * as format from '../../apis/format/format'

const FrBookingList = ({ sets, rrList }) => {



  return (
    <>
      <div id="topContent">
        <h1>대관 요청 내역</h1>
        <p>어떤 밴드가 공연을 빛내줄까요? 공연팀을 결정해주세요!</p>
        <hr />
      </div>
      <div id="teamListContainer">
        <div className="tableContainer">
          <table>
            <tr>
              <th width="80">번호</th>
              <th width="250">대관글 제목</th>
              <th width="100">이름</th>
              <th width="150">연락처</th>
              <th width="150">대관일자</th>
              <th width="100">입금여부</th>
              <th width="100">승인여부</th>
              <th width="120">신청일자</th>
              <th width="120">입금확정</th>
              <th width="80">승인</th>
              <th width="80">거부</th>
            </tr>
            <tbody>

              {rrList.length == 0 ? (
                <tr>
                  <td colSpan="11">조회된 데이터가 없습니다!</td>
                </tr>
              ) : rrList.map((rr) => (

                <tr className="read-app-list-row">
                  <td>{rrList.brNo}</td>
                  <td>{rr.frTitle}</td>
                  <td>{rr.name}</td>
                  <td>{rr.phone}</td>
                  <td>{rr.frDate}</td>
                  {rr.depositStatus == 0 && <td>미입금</td>}
                  {rr.depositStatus == 1 && <td>입금확인</td>}
                  {rr.approvalStatus == 0 && <td>미확인</td>}
                  {rr.approvalStatus == 1 && <td>승인</td>}
                  {rr.approvalStatus == 2 && <td>거절</td>}
                  <td>{
                    format.formatDate(rr.updDate)
                  }</td>
                  <td>
                    {rr.depositStatus == 0 && rr.approvalStatus == 1 && <input type="button" value="입금확정" className="btn-cancel" onClick={() => {
                      sets.conHandler(rr.brNo)
                    }} />}
                  </td>

                  <td>
                    {rr.depositStatus == 0 && rr.approvalStatus == 0 && <input type="submit" value="승인" className="btn-cancel" onClick={() => {
                      sets.accHandler(rr.brNo)
                    }} />}
                  </td>

                  <td>
                    {rr.depositStatus == 0 && rr.approvalStatus == 0 && <input type="submit" value="거절" className="btn-cancel" onClick={() => {
                      sets.dniHandler(rr.brNo)
                    }} />}
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default FrBookingList