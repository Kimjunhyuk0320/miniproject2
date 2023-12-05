import React from 'react'
import { Link } from 'react-router-dom';


const TeamRead = ({ team, delHandler }) => {

    const updDate = new Date(team.updDate);

    return (
        <>
            <div className="topContentContainer">

                <div className="contentContainer">
                    <div className="tableContainer">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <div className="titleBox">
                                            <div>
                                                <h1 style={{ width: '1000px' }}>{team.title}</h1>
                                                <div>
                                                    <p style={{ display: 'inline-block' }}>업로드 시각 : </p>
                                                    <p style={{ display: 'inline-block' }}>{
                                                        `${updDate.getFullYear()}년 ${updDate.getMonth() + 1}월 ${updDate.getDate()}일 ${updDate.getHours()}시 ${updDate.getMinutes()}분`
                                                    }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <div style={{ margintop: '10px', width: '100px' }}>
                                                    <p style={{ display: 'inline-block' }}>조회수 : </p>
                                                    <p style={{ display: 'inline-block' }}>{team.views}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '30%' }}>작성자</td>
                                    <td>{team.writer}</td>
                                </tr>
                                <tr>
                                    <td>모집 팀 수</td>
                                    <td>{team.capacity}</td>
                                </tr>
                                <tr>
                                    <td>공연일자</td>
                                    <td >{team.liveDate}</td>
                                </tr>
                                <tr>
                                    <td>공연시간</td>
                                    <td>{team.liveStTime} ~ {team.liveEndTime}</td>
                                </tr>
                                <tr>
                                    <td>공연지역</td>
                                    <td>{team.location}</td>
                                </tr>
                                <tr>
                                    <td>공연장소</td>
                                    <td>{team.address}</td>
                                </tr>
                                <tr>
                                    <td>팀 모집 현황</td>
                                    {
                                        team.confirmed == 0 ? (
                                            <td>{team.recStatus} / {team.capacity}</td>
                                        ) : (
                                            <td><b>(모집종료)</b></td>
                                        )
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div>
                    <Link to="/teamList">
                        <button type="button">목록</button>
                    </Link>
                </div>
                <div>
                    {/* th:onclick=" 'moveApplication('+${team.teamNo}+')'  */}
                    <Link to={`/team/app/${team.teamNo}`}>
                        <button type="button" id="red-btn">신청</button>
                    </Link>
                    <Link to={`/team/update/${team.teamNo}`}>
                        <button style={{ backgroundColor: 'rgba(0, 0, 255, 0.525)' }}>수정</button>
                    </Link>
                    <button type="submit" style={{ backgroundColor: 'red' }} onClick={delHandler}>삭제</button>
                    {/* <input type="hidden" name="username" th:value="${#authentication.principal.users.username}" id="username">
                    <input type="hidden" name="profileNo" th:value="${#authentication.principal.users.profileNo}" id="profileNo">
                    <th:block th:if="${team.confirmed == 0 && team.username != #authentication.principal.username}">
                    </th:block>
                    <th:block th:if="${team.username == #authentication.principal.username}">


                    
                        <form action="/team/delete" method="POST" style="display: inline-block;">
                            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}">
                            <input type="hidden" name="teamNo" th:value="${team.teamNo}">
                            <input type="hidden" name="recStatus" th:value="${team.recStatus}">
                        </form>

                    </th:block>
                </th:block> */}
                </div>
            </div>
            <div class="textContainer">
                <p dangerouslySetInnerHTML={{ __html: team.content }}></p>
            </div>
        </>
    )
}

export default TeamRead