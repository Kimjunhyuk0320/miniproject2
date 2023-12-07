import React from 'react'

const FrMyBookingList = ({ sets, rreqList }) => {


    return (
        <>
            <div id="topContent">
                <h1>예약 신청한 대관 내역</h1>
                <p>예약 신청한 대관 내역에 대한 정보입니다.</p>
                <hr />
            </div>

            <div id="teamListContainer">
                <div className="tableContainer">
                    <table style={{ marginBottom: '100px' }}>
                        <thead>
                            <tr>
                                <th width="80">번호</th>
                                <th width="250">대관글 제목</th>
                                <th width="120">대관 연락처</th>
                                <th width="100">대관인 성명</th>
                                <th width="100">주소</th>
                                <th width="200">계좌번호</th>
                                <th width="100">입금여부</th>
                                <th width="90">승인여부</th>
                                <th width="90">신청취소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rreqList.length == 0 ? (
                                <tr>
                                    <td colSpan="9">조회된 내역이 없습니다.</td>
                                </tr>
                            ) : rreqList.map((rreq) => (
                                <tr className="read-app-list-row">
                                    <td>{rreq.brNo}</td>
                                    <td>{rreq.frTitle}</td>
                                    <td>{rreq.frPhone}</td>
                                    <td>{rreq.name}</td>
                                    <td>{rreq.frAddress}</td>
                                    <td>{rreq.frAccount}</td>
                                    {rreq.depositStatus == 0 && <td>미입금</td>}
                                    {rreq.depositStatus == 1 && <td>입금확인</td>}
                                    {rreq.approvalStatus == 0 && <td>미확인</td>}
                                    {rreq.approvalStatus == 1 && <td>승인</td>}
                                    {rreq.approvalStatus == 2 && <td>거절</td>}
                                    <td>
                                        {rreq.depositStatus == 0 && <input type="button" value="신청취소" className="btn-cancel" onClick={()=>{
                                            sets.delHandler(rreq.brNo)
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

export default FrMyBookingList