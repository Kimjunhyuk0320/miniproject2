import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ commentList, deleteComment, updateComment}) => {
  const [editingComment, setEditingComment] = useState(null);

  //유저 아이디 받아오기
  const username = 'junhyuk'
  const onClickDelete = (commentNo) => {
    deleteComment(commentNo);
  }

  const onClickUpdate = (commentNo) => {
    setEditingComment(commentNo);
  }

  const onCancelUpdate = () => {
    setEditingComment(null);
  }

  const onUpdateComment = async (commentNo, writer, updatedContent) => {
      const response = updateComment(commentNo, writer, updatedContent)
      if (response !== '0') {
        setEditingComment(null);
      } else {
        alert('댓글 수정 실패')
      }
   
  }

  return (
    <div id='comment-list'>
      {commentList.length === 0 ? (
        <div className="commentContainer">
          <span>댓글이 없습니다.</span>
        </div>
      ) : (
        commentList.map((comment) => {
          // 날짜 및 시간 형식화
          let date = new Date(comment.regDate);
          let regDate = date.toISOString().split("T")[0];
          let regTime = date.toISOString().split("T")[1];
          regTime = regTime.split(".")[0];

          return (
            <div className="commentContainer" key={comment.commentNo}>
               {/* 프로필 이미지 렌더링 */}
               {comment.profileNo !== 0 ? (
                <div className="imgDiv">
                  <img
                    src={`/api/file/img/${comment.profileNo}`}
                    alt="프로필"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      boxShadow: "0px 0px 10px gray",
                    }}
                  />
                </div>
              ) : (
                <div className="imgDiv">
                  <img
                    src="/img/defaultProfile.png"
                    alt="프로필"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      boxShadow: "0px 0px 10px gray",
                    }}
                  />
                </div>
              )}

              <div className="comment-box">
                <div className="data-box">
                  <div className="top">
                    <div className="itemSt">
                      <h2 className="comment-writer">{comment.writer}</h2>
                      <span className="comment-date">{regDate} {regTime}</span>
                    </div>
                    {(editingComment !== comment.commentNo) && (username === comment.username ) ? (
                    <div className="itemsNd">
                      <Link className="btn btn-sm btn-comment-update" onClick={() => onClickUpdate(comment.commentNo)}>
                        수정
                      </Link>
                      <Link className="btn btn-sm btn-comment-delete" onClick={() => onClickDelete(comment.commentNo)}>
                        삭제
                      </Link>
                    </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="bottom">
                    {editingComment !== comment.commentNo ? (
                       <p className="comment-content">{comment.content}</p>
                      ) : (
                        <></>
                      )}
                  </div>
                </div>
                <div className="edit-box">
                    {editingComment === comment.commentNo ? (
                      <div>
                        <textarea
                          id={`input-update-content-${comment.commentNo}`}
                          className='input-update-content'
                          cols="40"
                          rows="1"
                          defaultValue={comment.content}
                        />
                        <div className="etc-box">
                          <Link
                            className="btn btn-sm"
                            onClick={() => onUpdateComment(comment.commentNo, comment.writer, document.getElementById(`input-update-content-${comment.commentNo}`).value)}
                          >
                            수정
                          </Link>
                          <Link className="btn btn-sm" onClick={onCancelUpdate}>
                            취소
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CommentList;
