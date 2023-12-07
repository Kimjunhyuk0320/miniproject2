import React from 'react'
import { Link } from 'react-router-dom'

const TeamList = ({ teamList }) => {
  return (
    <>
      <div class="tableContainer">
        <table>
          <thead>
            <tr>
                <th width="80">번호</th>
                <th width="100">마감</th>
                <th width="200">제목</th>
                <th width="100">작성자</th>
                <th width="95">팀 모집 현황</th>
                <th width="70">지역</th>
                <th width="80">가격</th>
                <th width="100">공연일자</th>
                <th width="140">갱신일자</th>
                <th width="65">조회수</th>
            </tr>
          </thead>
          <tbody id="team-data">
            {
              teamList.length == 0 ? (
                <tr>
                  <td colSpan="10">조회된 데이터가 없습니다.</td>
                </tr>
              ) : (
                teamList.map((team) => (
                  <tr className="team-list-row">
                    <td>{team.teamNo}</td>
                    <td>{team.confirmed != 0 ? '마감' : '모집중'}</td>
                    <Link className='a' to={`/team/${team.teamNo}`}>
                      <td>{team.title}</td>
                    </Link>
                    <td>{team.writer}</td>
                    <td>{team.recStatus}/{team.capacity}</td>
                    <td>{team.location}</td>
                    <td>{team.price}</td>
                    <td>{team.liveDate}</td>
                    <td>{new Date(team.updDate).toISOString().split("T")[0]}</td>
                    <td>{team.views}</td>
                  </tr>
                ))
              )
            }

          </tbody>
        </table>
      </div>

    </>
  )
}

export default TeamList