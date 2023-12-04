import React, { useEffect, useState } from 'react'
import Image from '../../components/LiveBoard/Image'
import Information from '../../components/LiveBoard/Information'
import Controller from '../../components/LiveBoard/Controller'
import Content from '../../components/LiveBoard/Content'
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
import { useNavigate } from 'react-router-dom'



const LiveBoardReadContainer = ({no}) => {
  const navigate = useNavigate()
  const [liveBoard, setLiveBoard] = useState({})
  const [ticketCount, setTicketCount] = useState(1)
  const boardNo = liveBoard.boardNo
  const title = liveBoard.title
  const ticketPrice = liveBoard.price
  const name = '김준혁'
  const phone = '01012341234'
  const email = 'asdf12341234@naver.com'
  const count = ticketCount

  const getLiveBoard = async () => {
    const response = await liveBoards.getPage(no);
    const data = await response.data
    setLiveBoard(data)
    console.log(data)
  }

  const purchaseticket = async () => {
    const response1 = await liveBoards.getTicketNum(boardNo, name, phone, ticketCount)
    const data1 = await response1.data
    console.log(data1)
    // 결제 모듈 가져오기
    if( data1 == 'SUCCESS' ){
    // 2️⃣  객체 초기화 하기
    var IMP = window.IMP; 
    // IMP.init("imp67011510"); 
    IMP.init("imp48458232"); 
    
    var today = new Date();   
    var hours = today.getHours(); // 시
    var minutes = today.getMinutes();  // 분
    var seconds = today.getSeconds();  // 초
    var milliseconds = today.getMilliseconds();
    var makeMerchantUid = hours +  minutes + seconds + milliseconds;




      // 결제 정보 가져오기
      let productName = title
      let price = ticketPrice * count
      let buyername = name
      let tel = phone
      let buyeremail = email

      IMP.request_pay({
          pg : 'kcp',                                 // PG사
          pay_method : 'card',                        // 결제방식
          merchant_uid: "IMP"+makeMerchantUid,        // 주문번호(상품ID)
          name : productName,                         // 상품명
          amount : price,                              // 결제금액
          buyer_email : buyeremail,                        // 결제자 이메일
          buyer_name : buyername,                          // 결제자 이름
          buyer_tel : tel,                            // 결제자 전화번호
          // buyer_addr : "",                       // 결제자 주소
          // buyer_postcode : "",                   // 결제자 우편번호
          // m_redirect_url : "success"          //  "리디렉션 URL", (리디렉션 방식의 경우 callback은 실행되지 않습니다.)
      }, async function (rsp) { // callback

        clearInterval(timerId)

        if (rsp.success) {
            // 결제 성공
            console.log(rsp);
            //티켓 구매
            const response3 = await liveBoards.getPage(no);
            const data3 = await response3.data
            if( data3 == 'SUCCESS'){
                  alert('티켓 구매가 완료되었습니다.')
                  // 리다이렉트
                  navigate(`/liveBoard/${boardNo}`)
              }
              if( data3 == 'OVERCOUNT' ){
                  alert('잔여티켓보다 구매티켓 수가 많습니다.')

                  // 결제 모듈 강제 종료
                  // 리다이렉트
                  navigate(`/liveBoard/${boardNo}`)
                  
              }
              if( data3 == 'ZERO' ){
                  alert('매진 되었습니다.')
                  // 결제 모듈 강제 종료
                  // 리다이렉트
                  navigate(`/liveBoard/${boardNo}`)
              }
       
              // 결제 완료 페이지로 이동
              // location.href = 'success?result=ok&proudctId=' + ("IMP"+makeMerchantUid)

              // 또는 ajax 요청 처리 후 이동
              
            } else {
              // 결제 실패
              console.log(rsp);
              // 리다이렉트
              navigate(`/liveBoard/${boardNo}`)
          }
      });
    }
    if( data1 == 'OVERCOUNT' ){
        alert('잔여티켓보다 구매티켓 수가 많습니다.')
        // 리다이렉트
        navigate(`/liveBoard/${boardNo}`)
    }
    if( data1 == 'ZERO' ){
        alert('매진되었습니다.')
        // 리다이렉트
        navigate(`/liveBoard/${boardNo}`)
    }
    if( data1 == 'TICKETZERO' ){
        alert('선택한 티켓 수량을 선택하지 않았습니다.')
        // 리다이렉트
        navigate(`/liveBoard/${boardNo}`)
    }

    let timerId = setInterval(async() => {
      console.log("Delayed for 1 second.");
      // 매진 체크
      // 등록 요청
      const response2 = await liveBoards.getTicketNum(boardNo, name, phone, ticketCount)
      const data2 = await response2.data
              if( data2 == 'OVERCOUNT' ){
                  alert('잔여티켓보다 구매티켓 수가 많습니다.')

                      // 결제 모듈 강제 종료
                      // 리다이렉트
                      navigate(`/liveBoard/${boardNo}`)
                  
              }
              if( data2 == 'ZERO' ){
                  alert('매진 되었습니다.')
                      // 결제 모듈 강제 종료
                      // 리다이렉트
                      navigate(`/liveBoard/${boardNo}`)
              }


  }, 1000);



  }

  useEffect(()=>{
    getLiveBoard()
   
  },[])

  return (
    <div>LiveBoardReadContainer
        <div className='topContentContainer'>
          <Image liveBoard={liveBoard}/>
          <Information liveBoard={liveBoard} ticketCount={ticketCount} setTicketCount={setTicketCount}/>
        </div>
        <div className='bottomContainer'>
          <Controller purchaseticket={purchaseticket} no={no}/>
        </div>

        <Content liveBoard={liveBoard}/>
    </div>
  )
}

export default LiveBoardReadContainer