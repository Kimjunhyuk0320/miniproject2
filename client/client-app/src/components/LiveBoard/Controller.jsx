import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

const Controller = ({ purchaseticket, no, liveBoard }) => {

  const { jwtSets } = useContext(UserContext)

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
        {jwtSets.parsedToken.username == liveBoard.username && (
          <>
            <button type="button" onClick={moveUpdate} >수정</button>
            <button type="button" onClick={deleteBoard}>삭제</button>
          </>
        )}
      </div>
      <div>
        <div>
          {jwtSets.isLogin ?
            <button type="button" id="btn-purchase" onClick={clickPurchase}>예매하기</button>
            :
            <button type="button" id="btn-purchase">로그인 후 예매하기</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Controller