import React, { useEffect, useState } from 'react';
import * as myPages from '../../apis/myPage/myPageApi';

const TicketSalesList = () => {
  const [ticketList, setTicketList] = useState([]);
  const username = 'koogc0724'

  useEffect(() => {
    getList2();
  }, []);

  // 게시글 목록
  const getList2 = async () => {
    try {
      const response = await myPages.getList2(username);
      const data = response.data;
      console.log(data);
      setTicketList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 티켓 데이터를 테이블로 렌더링
  const renderTicketData = () => {
    return ticketList.map((ticket, index) => {
      return (
        <tr key={index}>
          <td>{ticket.reservationNo}</td>
          <td>{ticket.title}</td>
          <td>{ticket.name}</td>
          <td>{ticket.phone}</td>
          <td>{ticket.liveDate}</td>
          <td>{ticket.updDate}</td>
          <td>{ticket.refund === 0 ? '결제완료' : '기타 상태'}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div id="topContent">
        <h1>티켓 판매 내역</h1>
        <p>판매된 티켓 내역에 대한 정보입니다. 멋진 공연을 기대할게요!</p>
        <hr />
      </div>

      <div id="teamListContainer">
        <div className="tableContainer">
          <table style={{ marginBottom: '100px' }}>
            <thead>
              <tr>
                <th width="350">티켓 번호</th>
                <th width="300">공연명</th>
                <th width="100">성명</th>
                <th width="200">연락처</th>
                <th width="200">공연일자</th>
                <th width="200">구매일자</th>
                <th width="100">예매상태</th>
              </tr>
            </thead>

            <tbody id="ticket-data">{renderTicketData()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TicketSalesList;
