import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContextProvider';

const CommentInsert = ({ insertComment, parentNo, parentTable }) => {
  const [inputValue, setInputValue] = useState('');

  const { userInfo } = useContext(LoginContext);

  // userInfo가 null인 경우 해당 부분을 렌더링하지 않음
  if (!userInfo || userInfo === null) {
    return null;
  }

  const username = userInfo.username;
  const nickname = userInfo.nickname;
  const profileNo = userInfo.profileNo;

  const onSubmit = () => {
    insertComment(parentNo, parentTable, nickname, inputValue, username, profileNo);
    setInputValue('');
  };

  const onClick = () => {
    setInputValue('');
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-box">
      <div className="imgDiv">
        {profileNo !== 0 ? (
          <img src={`/api/file/img/${profileNo}`} alt="프로필사진" />
        ) : (
          <img src="/img/defaultProfile.png" alt="프로필사진" />
        )}
      </div>
      <div className="comment-input">
        <br />
        <textarea
          name="content"
          id="comment-content"
          cols="10"
          rows="1"
          placeholder="댓글 추가..."
          value={inputValue}
          onChange={handleChangeInput}
        ></textarea>
        <div className="btn-box">
          <Link id="btn-comment-insert" className="btn btn-sm" onClick={onSubmit}>
            등록
          </Link>
        </div>
        <div className="btn-box-can">
          <Link id="btn-comment-del" className="btn btn-sm" onClick={onClick}>
            취소
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentInsert;
