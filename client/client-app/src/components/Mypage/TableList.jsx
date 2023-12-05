import React, { useEffect, useState } from 'react';
import * as myPages from '../../apis/myPage/myPageApi';


const TicketPurchaseList = () => {
    const [ticketList, setTicketList] = useState([]);
    const [phone, setPhone] = useState('01040115135');

    useEffect(() => {
        getList();
    }, [phone]); // phone 값이 변경될 때마다 getList 함수 호출

    // 게시글 목록
    const getList = async () => {
        const response = await myPages.getList(phone);
        const data = await response.data
        console.log(data)
        setTicketList(data)
    };

    // 티켓 데이터를 테이블로 렌더링
    const renderTicketData = () => {
        return ticketList.map((ticket, index) => {
            return (
                <tr key={index}>
                    <td>{ticket.reservationNo}</td>
                    <td>{ticket.title}</td>
                    <td>{ticket.liveDate}</td>
                    <td>{ticket.name}</td>
                    <td>{ticket.refund}</td>
                    <td>{ticket.updDate}</td>
                </tr>
            );
        });
    };

    return (
        <>
            <div id="topContent">
                <h1>티켓 구매 내역</h1>
                <p>회원님이 구매한 태켓 내역입니다. 공연명과 공연일자를 꼭 확인해 주세요.</p>
                <hr/>
            </div>
            {/* phone 값을 입력받는 부분 추가 */}
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />

            <div id="teamListContainer">
                <div class="tableContainer">
                    <table style={{ marginBottom: '100px' }}>
                        <thead>
                            <tr>
                                <th width="300">예매 번호</th>
                                <th width="300">공연명</th>
                                <th width="100">공연일자</th>
                                <th width="100">예매자명</th>
                                <th width="80">예매상태</th>
                                <th width="100">구매일자</th>
                            </tr>
                        </thead>

                        <tbody id="ticket-data">
                            {renderTicketData()}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 기타 코드 생략... */}
        </>
    );
};

export default TicketPurchaseList;
