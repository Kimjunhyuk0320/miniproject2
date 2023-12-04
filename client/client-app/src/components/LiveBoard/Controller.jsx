import React from 'react'
import { useNavigate } from 'react-router-dom'

const Controller = ({ purchaseticket, no}) => {
  const navigate = useNavigate()
  const moveList = () => {
    navigate('/liveBoard')
  }
  const moveUpdate = () => {
    navigate(`/liveBoard/update/${no}`)
  }
  const deleteBoard = () => {
    navigate('/liveBoard')
  }


  const clickPurchase = () => {
    purchaseticket()
  }



  return (
    <div className='bottomContainer'>
      <div>
          <button type="button" onClick={moveList}>목록</button>
          <button type="button" onClick={moveUpdate} >수정</button>
          <button type="button" onClick={deleteBoard}>삭제</button>
      </div>
          <div>
            <div>
              <button type="button" id="btn-purchase" onClick={clickPurchase}>예매하기</button>
            </div>
          </div>
    </div>
  )
}

export default Controller