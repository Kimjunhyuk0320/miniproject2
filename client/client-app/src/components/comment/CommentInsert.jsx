import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

const CommentInsert = ({insertComment, parentNo, parentTable }) => {
  const {jwtSets} = useContext(UserContext)
  const [inputValue, setInputValue] = useState('')
  
  //유저정보 받아오기
  const username = jwtSets.parsedToken.username ?? 'GUEST'
  const nickname = jwtSets.parsedToken.nickname ?? ''
  const profileNo = jwtSets.parsedToken.profileNo ?? 0
  const onsubmit = () => {
    
    insertComment(parentNo, parentTable, nickname, inputValue, username, profileNo)
    setInputValue('')
  }

  const onClick = () => {
    setInputValue('')
  }
  const handleChangeInput = (e) => {
    setInputValue(e.target.value)
  }




  return (
    <div>
      <div className="input-box">
          <div className="imgDiv">
                { profileNo !== 0 ? (
                  <img src={`/api/file/img/${profileNo}`} alt="프로필사진"/>
                ) : (
                  <img src="/img/defaultProfile.png" alt="프로필사진"/>
                )}
          </div>
          <div className="comment-input">
              <br/>
              <textarea name="content" id="comment-content" 
              cols="10" rows="1" placeholder="댓글 추가..." value={inputValue} onChange={handleChangeInput} ></textarea>
              <div className="btn-box">
                  <a id="btn-comment-insert" className="btn btn-sm" onClick={onsubmit}>등록</a>
              </div>
              <div className="btn-box-can">
                  <a id="btn-comment-del" className="btn btn-sm" onClick={onClick}>취소</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default CommentInsert