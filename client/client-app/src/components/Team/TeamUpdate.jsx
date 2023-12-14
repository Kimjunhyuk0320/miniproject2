import React, { useContext } from 'react'
// 게시글 에디터
import * as filesApi from '../../apis/file/fileApi'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext'

const TeamUpdate = ({ sets, updateHandler2 }) => {
  const { jwtSets } = useContext(UserContext)
  // 게시글 에디터
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then(async (file) => {
            console.log(file);
            formData.append("parentTable", 'editor');
            formData.append("file", file);

            const headers = {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${jwtSets.jwtToken}`
              },
            };

            let response = await filesApi.upload(formData, headers);
            let data = await response.data;
            console.log(`data : ${data}`);

            let newFileNo = data;

            await resolve({
              default: `/file/img/${newFileNo}`
            })

          });
        });
      },
    };
  };

  return (
    <>
      <div id="topContent">
        <h1>공연팀 모집 게시글 수정</h1>
        <p>공연팀 모집 게시글을 수정합니다. 꼼꼼하게 수정해 주세요.</p>
        <hr />
      </div>

      <div id="insertContainer">
        {/* <input type="hidden" name="teamNo" th:value="${team.teamNo}">
            <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" id="_csrf">
            <input type="hidden" name="writer" th:value="${#authentication.principal.users.nickname}">
            <input type="hidden" name="username" th:value="${#authentication.principal.users.username}"> */}

        <div className="tableContainer">
          <table>
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  <input type="text" name='title' id='title' value={sets.title ?? ''} onChange={(e) => {
                    sets.setTitle(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>모집팀 수</td>
                <td>
                  <select name="capacity" value={sets.capacity ?? '1'} onChange={(e) => {
                    sets.setCapacity(e.target.value)
                  }}>
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명</option>
                    <option value="6">6명</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>공연일자</td>
                <td>
                  <input type="date" name='liveDate' value={sets.liveDate ?? ''} onChange={(e) => {
                    sets.setLiveDate(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>공연 시작 시각</td>
                <td>
                  <input type="time" name="liveStTime" id="liveStTime" value={sets.liveStTime ?? ''} onChange={(e) => {
                    sets.setLiveStTime(e.target.value)
                  }

                  } />
                </td>
              </tr>

              <tr>
                <td>공연 종료 시각</td>
                <td>
                  <input type="time" name="liveEndTime" id="liveEndTime" value={sets.liveEndTime ?? ''} onChange={(e) => {
                    sets.setLiveEndTime(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>지역</td>
                <td>
                  <select name="location" id="location" value={sets.location ?? '경기'} onChange={(e) => {
                    sets.setLocation(e.target.value)
                  }}>
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
                <td>장소</td>
                <td>
                  <input type="text" name="address" id="address" value={sets.address ?? ''} onChange={(e) => {
                    sets.setAddress(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>계좌번호</td>
                <td className="account-inputs">
                  <select name="account1" id="account1" value={sets.account1 ?? '신한은행'} onChange={(e) => {
                    sets.setAccount1(e.target.value)
                  }}>
                    <option value="신한은행">신한은행</option>
                    <option value="우리은행">우리은행</option>
                    <option value="하나은행">하나은행</option>
                    <option value="SC은행"> SC은행</option>
                    <option value="도이치은행" >도이치은행</option>
                    <option value="뱅크오브아메리카">뱅크오브아메리카</option>
                    <option value="수협은행">수협은행</option>
                    <option value="제주은행">제주은행</option>
                    <option value="카카오뱅크">카카오뱅크</option>
                    <option value="케이뱅크">케이뱅크</option>
                    <option value="한국씨티은행">한국씨티은행</option>
                    <option value="BNP파리바은행">BNP파리바은행</option>
                    <option value="HSBC은행">HSBC은행</option>
                    <option value="JP모건체이스은행">JP모건체이스은행</option>
                    <option value="산림조합중앙회">산림조합중앙회</option>
                    <option value="새마을금고은행">새마을금고은행</option>
                    <option value="저축은행">저축은행</option>
                    <option value="신협중앙회">신협중앙회</option>
                    <option value="우체국">우체국</option>
                  </select>
                  <input type="text" name="account2" id="account2" value={sets.account2 ?? ''} onChange={(e) => {
                    sets.setAccount2(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>가격</td>
                <td>
                  <input type="text" name="price" id="price" value={sets.price ?? ''} onChange={(e) => {
                    sets.setPrice(e.target.value)
                  }} />
                </td>
              </tr>
              <tr>
                <td>게시글 작성 에디터</td>
                <td className="data">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      placeholder: "내용을 입력하세요.",
                      toolbar: {
                        items: [
                          'undo', 'redo',
                          '|', 'heading',
                          '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                          '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                          '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                          '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                          '|', 'mediaEmbed',
                        ],
                        shouldNotGroupWhenFull: false
                      },
                      editorConfig: {
                        height: "1000", // Set the desired height in pixels
                      },
                      alignment: {
                        options: ['left', 'center', 'right', 'justify'],
                      },

                      extraPlugins: [uploadPlugin]            // 업로드 플러그인
                    }}
                    data={sets.content}
                    onReady={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                      sets.setContent(data);
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="bottomSubmit">
                  <div className="centered-buttons">
                    <Link to="/teamList">
                      <button type="button" >목록</button>
                    </Link>
                    <button type="button" onClick={updateHandler2}>수정</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TeamUpdate