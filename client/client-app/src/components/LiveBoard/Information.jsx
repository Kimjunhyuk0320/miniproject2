import React from 'react'

const Information = ({liveBoard, setTicketCount, ticketCount}) => {

  const increase = () => {
    setTicketCount( ticketCount + 1)
  }

  const decrease = () => {
    if(ticketCount > 1){
        setTicketCount(ticketCount - 1)
    }
  }


  return (
    <div className='contentContainer'>
      <div className="tableContainer">
        <table>
            <tbody>

                <tr>
                    <td colSpan="2">
                        <h2>{liveBoard.title}</h2>
                        <hr/>
                    </td>
                </tr>
                <tr>
                    <td>공연일자</td>
                    <td>
                        <span>{liveBoard.liveDate}</span>
                    </td>
                </tr>
                <tr>
                    <td>공연시간</td>
                    <td>
                        <span>{liveBoard.liveTime}</span>
                    </td>
                </tr>
                <tr>
                    <td>공연진</td>
                    <td>
                        <span>{liveBoard.crew}</span>
                    </td>
                </tr>
                <tr>
                    <td>수용인원</td>
                    <td>
                        <span>{liveBoard.maxTickets}</span>
                    </td>
                </tr>
                <tr>
                    <td>티켓가격</td>
                    <td>
                        <span>{liveBoard.price}</span>
                    </td>
                </tr>
                <tr>
                    <td>지역</td>
                    <td>
                        <span>{liveBoard.location}</span>
                    </td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>
                        <span>{liveBoard.address}</span>
                    </td>
                </tr>
                <tr>
                    <td>잔여티켓</td>
                    <td>
                        <span id="ticketLeft">{liveBoard.ticketLeft}</span>
                    </td>
                </tr>
                <tr>
                    <td>매진여부</td>
                    <td>
                        {
                        liveBoard.soldOut == 0 ? (
                            <span>판매 중</span>
                        ): (
                            <span>매진</span>
                        )
                        }
                    </td>
                </tr>
                <tr>
                    <td>매수</td>
                    <td>
                        <div id="countFor">
                            <div>
                                <h3 id="countNum">{ticketCount}</h3>
                            </div>
                            <div id="aaaa">
                                <button type="button" className="countBtn" onClick={increase}>+</button>
                                <button type="button" className="countBtn" onClick={decrease}>-</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Information