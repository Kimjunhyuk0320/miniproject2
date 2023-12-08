import React from 'react'
import { Link } from 'react-router-dom'
import * as format from '../../apis/format/format'

const TeamConfirmedLiveList = ({ clList }) => {
  return (
    <>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th width="100">번호</th>
              <th width="300">모집글 제목</th>
              <th width="100">작성자</th>
              <th width="150">회원 아이디</th>
              <th width="150">공연진</th>
              <th width="100">지역</th>
              <th width="100">공연일자</th>
              <th width="140">성사 일자</th>
            </tr>
          </thead>
          <tbody id="team-data">
            {clList.length == 0 ? (
              <tr>
                <td colSpan="8">조회된 데이터가 없습니다.</td>
              </tr>
            ) : clList.map((cl) => (
              <tr className="read-app-list-row">
                <td align="center">{cl.teamNo}</td>
                <Link to={`/team/${cl.teamNo}`}>
                  <td>{cl.title}</td>
                </Link>
                <td align="center">{cl.writer}</td>
                <td align="center">{cl.username}</td>
                <td align="center">{cl.crew}</td>
                <td align="center">{cl.address}</td>
                <td align="center">
                  <span>{`${cl.liveDate} ${cl.liveStTime}`}</span>
                </td>
                <td align="center">
                  <span>{format.formatDate(cl.confirmedDate)}</span>
                </td>
              </tr >
            ))}
          </tbody >
        </table>
      </div>
    </>
  )
}

export default TeamConfirmedLiveList