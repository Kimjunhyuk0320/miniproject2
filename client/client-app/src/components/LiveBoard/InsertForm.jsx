import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
const InsertForm = () => {
  // 로그인 한 사용자 정보
  const writer = '마산 불주먹'
  const username = 'junhyuk'

  // 게시글 정보
  const [title, setTitle] = useState('');
  const [crew, setCrew] = useState('');
  const [liveDate, setLiveDate] = useState('');
  const [liveStTime, setLiveStTime] = useState('');
  const [liveEndTime, setLiveEndTime] = useState('');
  const [location, setLocation] = useState('경기');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [maxTickets, setMaxTickets] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState([]);     // ✅ files state 추가
  const [content, setContent] = useState('');
  const navigate = useNavigate()
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    const file1 = e.target.files[0];
    if (file1) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const source = event.target.result;
        setThumbnail({ file1, source });
      };

      reader.readAsDataURL(file1);
    } else {
      setThumbnail(null);
    }
    setFile(e.target.files);
  };

  const handleRemoveThumbnail = () => {
    setThumbnail(null);
    setFile([]);
     // 파일이 삭제되었으므로 input 태그의 value를 초기화
     const thumbnailInput = document.getElementById('thumbnail');
     if (thumbnailInput) {
       thumbnailInput.value = '';
     }

  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
      const headers = {
        headers: {
            'Content-Type' : 'multipart/form-data',
        },
      };

      try {
        const response = await liveBoards.insertLiveBoard({username, writer, title, crew, liveDate, liveStTime, liveEndTime, location,  address, price, maxTickets, file, content}, headers);
        console.log(response); // 응답 확인
        const data = response.data;
        if (data === 0) {
            alert('게시글 작성 실패');
        } else {
            moveList();
        }
    } catch (error) {
        console.error("Error in onSubmit:", error); // 클라이언트 측 로그 추가
        alert('서버 오류가 발생했습니다.');
    }
  };

  const moveList = () => {
    navigate('/liveBoard')
  };

  return (
    <div>
      <div id="topContent">
          <div>
              <h1>공연 게시글 작성하기</h1>
              <p>공연 게시글을 작성합니다. 꼼꼼하게 작성해 주세요.</p>
              <hr/>
          </div>
      </div>

      <div id="insertContainer">
        <div className="tableContainer">
          <table>
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="제목"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>공연진</td>
                <td>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="공연진"
                    name="crew"
                    id="crew"
                    value={crew}
                    onChange={(e) => setCrew(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>공연일자</td>
                <td>
                  <input
                    type="date"
                    className="form__field"
                    placeholder="공연일자"
                    name="liveDate"
                    id="liveDate"
                    value={liveDate}
                    onChange={(e) => setLiveDate(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>공연 시작 시각</td>
                <td>
                  <input
                    type="time"
                    className="form__field"
                    placeholder="공연 시작 시각"
                    name="liveStTime"
                    id="liveStTime"
                    value={liveStTime}
                    onChange={(e) => setLiveStTime(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>공연 종료 시각</td>
                <td>
                  <input
                    type="time"
                    className="form__field"
                    placeholder="공연 종료 시각"
                    name="liveEndTime"
                    id="liveEndTime"
                    value={liveEndTime}
                    onChange={(e) => setLiveEndTime(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>지역</td>
                <td>
                  <select
                    name="location"
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                  >
                    <option value="경기">경기</option>
                    <option value="서울">서울</option>
                    <option value="부산">부산</option>
                    <option value="경남">경남</option>
                    <option value="인천">인천</option>
                    <option value="경북">경북</option>
                    <option value="대구">대구</option>
                    <option value="충남">충남</option>
                    <option value="전남">전남</option>
                    <option value="전북">전북</option>
                    <option value="충북">충북</option>
                    <option value="강원">강원</option>
                    <option value="대전">대전</option>
                    <option value="광주">광주</option>
                    <option value="울산">울산</option>
                    <option value="제주">제주</option>
                    <option value="세종">세종</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>주소</td>
                <td>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="주소"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>티켓 가격</td>
                <td>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="티켓 가격"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>수용인원</td>
                <td>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="수용인원"
                    name="maxTickets"
                    id="maxTickets"
                    value={maxTickets}
                    onChange={(e) => setMaxTickets(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className="label">썸네일</td>
                <td className="data">
                  <div className="dropzone">
                    <input
                      type="file"
                      id="thumbnail"
                      name="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      multiple
                    />
                    { thumbnail ? (
                    <a href="javascript:;" className={`btn btn-sm btn-thumb-remove ${thumbnail ? '' : 'hide'}`} onClick={handleRemoveThumbnail}>
                      삭제
                    </a>
                      ) : (
                      <></>
                    )}
                    <div className="drop-img flex col main-center sub-center">
                      <div className="upload-box"></div>
                      <div className={thumbnail ? 'img-box' : 'img-box hide'}>
                        { thumbnail ? (
                          <img src={thumbnail ? thumbnail.source : ''} alt="Thumbnail" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td colSpan="2" id="textEditer" className="data">
                  <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    className="input-textarea"
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td colSpan="2" className="bottomSubmit">
                  <div className="centered-buttons">
                    <button type="button" onClick={moveList}>
                    목록
                    </button>
                    <button type="button" onClick={onSubmit}>등록</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default InsertForm