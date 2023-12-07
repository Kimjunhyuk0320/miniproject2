import React from 'react'
import { Link } from 'react-router-dom'
import * as format from '../../apis/format/format'

const TeamMyRegList = ({ tlmList, sets }) => {
    return (

        <>
            <div id="topContent">
                <h1>내가 신청한 참가 내역</h1>
                <p>어떤 팀과 함께 공연을 계획중이신가요? 멋진 공연을 기대할게요!</p>
                <hr />
            </div>

            <div id="teamListContainer">
                <div className="tableContainer">
                    <table style={{ marginBottom: '100px' }}>
                        <thead>
                            <tr>
                                <th width="50">번호</th>
                                <th width="300">모집글 제목</th>
                                <th width="100">참가자 아이디</th>
                                <th width="100">승인 상태</th>
                                <th width="140">신청 일자</th>
                                <th width="100">연락처</th>
                                <th width="100">입금여부</th>
                                <th width="100">참가취소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tlmList.length == 0 ? (
                                    <tr>
                                        <td colSpan="8">조회된 데이터가 없습니다.</td>
                                    </tr>
                                ) : tlmList.map((tlm) => (
                                    <tr className="read-app-list-row">
                                        <td>{tlm.appNo}</td>
                                        <Link to={`/team/${tlm.teamNo}`}>
                                            <td>{tlm.teamTitle}</td>
                                        </Link>
                                        <td>{tlm.username}</td>

                                        {tlm.approvalStatus == 0 && <td>미확인</td>}
                                        {tlm.approvalStatus == 1 && <td>승인</td>}
                                        {tlm.approvalStatus == 2 && <td>거절</td>}
                                        <td>
                                            {format.formatDate(tlm.updDate)}
                                        </td>
                                        <td>{tlm.phone}</td>
                                        {tlm.depositStatus == 1 && <td>입금확정</td>}
                                        {tlm.depositStatus == 0 && <td>미입금</td>}
                                        {tlm.depositStatus == 0 && (
                                            <td>
                                                <input type="button" onClick={() => {
                                                    sets.delHandler(tlm.appNo)
                                                }} value="참가취소" className="btn-cancel" />
                                            </td>
                                        )}
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

export default TeamMyRegList