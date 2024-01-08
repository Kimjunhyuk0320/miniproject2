import React, { useContext, useEffect, useState } from 'react';
import * as myPages from '../../apis/myPage/myPageApi';
import { LoginContext } from '../../contexts/LoginContextProvider'

const TicketPurchaseList = ({ userInfo }) => {
    // const { isLogin, userInfo } = useContext(LoginContext)
    const [ticketList, setTicketList] = useState([]);

    const userPhone = userInfo.phone;

    useEffect(() => {
        // alert("userInfo.phone : " + userInfo.phone)
        // alert(isLogin)
        if (userInfo)
            getList();
    }, [userInfo]); // phone 값이 변경될 때마다 getList 함수 호출

    // 게시글 목록
    const getList = async () => {
        // alert(userPhone)
        const response = await myPages.getList(userPhone);
        const data = await response.data
        console.log(data)

        setTicketList(data)
    };

    // 티켓 데이터를 테이블로 렌더링
    const renderTicketData = () => {
        if (ticketList.size === 0 ){
            return (
                <tr>
                    <td colSpan={6}>조회된 데이터가 없습니다.</td>
                </tr>
            )
        }
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
                <hr />
            </div>

            {/* phone 값을 입력받는 부분 추가 */}
            <div className="phoneInput">
                <p>고객님이 예약한 핸드폰 번호입니다.</p>
                <input type="text" value={userInfo?.phone} />
            </div>

            <div id="teamListContainer">
                <div className="tableContainer">
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

        </>
    );
};

export default TicketPurchaseList;
