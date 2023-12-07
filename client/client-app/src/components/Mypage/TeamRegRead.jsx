import React from 'react'
import * as format from '../../apis/format/format'
import { Link } from 'react-router-dom'

const TeamRegRead = ({ teamApp }) => {



    return (
        <>

            <div className="totalContainer" style={{ marginTop: '100px' }}>
                <div className="contentContainer">
                    <div className="tableContainer">
                        <table style={{ marginBottom: '100px' }}>
                            <tr>
                                <td colSpan="2">
                                    <div className="titleBox">
                                        <div>
                                            <h1 style={{ width: '1000px' }}>{teamApp.title}</h1>
                                            <div>
                                                <p style={{ display: 'inline-block' }}>신청 날짜 : </p>
                                                <p style={{ display: 'inline-block' }} >{format.formatDate(teamApp.updDate)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%' }}>밴드명</td>
                                <td>{teamApp.bandName}</td>
                            </tr>
                            <tr>
                                <td>연락처</td>
                                <td>{teamApp.phone}</td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>{teamApp.username}</td>
                            </tr>
                            <tr>
                                <td>승인상태</td>
                                {teamApp.approvalStatus == 0 && <td>미확인</td>}
                                {teamApp.approvalStatus == 1 && <td>승인</td>}
                                {teamApp.approvalStatus == 2 && <td>거절</td>}
                            </tr>
                            <tr>
                                <td>입금여부</td>
                                {teamApp.depositStatus == 0 && <td>미입금</td>}
                                {teamApp.depositStatus == 1 && <td>입금확정</td>}
                            </tr>
                        </table>
                    </div>
                    <div className="textContainer">
                        <p dangerouslySetInnerHTML={{ __html: teamApp.content }}></p>
                    </div>
                </div>


                <div className="bottomContainer">
                    <div>
                        <Link to={`/mypage/tllList`}>
                            <button type="button" style={{width: '300px'}}>신청리스트로 돌아가기</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TeamRegRead