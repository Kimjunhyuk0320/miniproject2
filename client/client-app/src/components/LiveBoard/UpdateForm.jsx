import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import * as liveBoards from '../../apis/liveBoard/liveBoardApi'
// 게시글 에디터
import * as filesApi from '../../apis/file/fileApi'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const UpdateForm = ({liveBoard}) => {
   // 로그인 한 사용자 정보
   const writer = '마산 불주먹'
   const username = 'junhyuk'
   // 게시글 정보
   const [title, setTitle] = useState('');
   const [crew, setCrew] = useState('');
   const [liveDate, setLiveDate] = useState('');
   const [liveTime, setLiveTime] = useState('');
   const [location, setLocation] = useState('');
   const [address, setAddress] = useState('');
   const [price, setPrice] = useState('');
   const [maxTickets, setMaxTickets] = useState('');
   const [thumbnail, setThumbnail] = useState(null);
   const [file, setFile] = useState([]);     // ✅ files state 추가
   const [content, setContent] = useState('');
   const navigate = useNavigate()
   const boardNo = liveBoard.boardNo
   
    // 게시글 에디터
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return customUploadAdapter(loader);
    };
  }
  
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise( (resolve, reject) => {
          const formData = new FormData();
          loader.file.then( async (file) => {
                console.log(file);
                formData.append("parentTable", 'editor');
                formData.append("file", file);

                const headers = {
                    headers: {
                        'Content-Type' : 'multipart/form-data',
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


   useEffect(() => {
    if (liveBoard) {
      setTitle(liveBoard.title || ''); 
      setCrew(liveBoard.crew || ''); 
      setLiveDate(liveBoard.liveDate || ''); 
      setLiveTime(liveBoard.liveTime || ''); 
      setLocation(liveBoard.location || ''); 
      setAddress(liveBoard.address || ''); 
      setPrice(liveBoard.price || ''); 
      setMaxTickets(liveBoard.maxTickets || ''); 
      setContent(liveBoard.content || ''); 
    }
  }, [liveBoard]);


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




  const moveList = () => {
    navigate('/liveBoard')
  };

  const actionUpdate = async () => {
    const headers = {
      headers: {
          'Content-Type' : 'multipart/form-data',
      },
    };

    try {
      const response = await liveBoards.updateLiveBoard({boardNo, username, writer, title, crew, liveDate, liveTime, location,  address, price, maxTickets, file, content}, headers);
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
  
  return (
      <div>
        <div id="topContent">
          <h1>공연 게시글 수정</h1>
          <p>공연 게시글을 작성합니다. 꼼꼼하게 작성해 주세요.</p>
          <hr />
        </div>
        <div id="insertContainer">
          <div className="tableContainer">
            <table>
              <tbody>
                <tr>
                  <td>제목</td>
                  <td>
                    <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>공연진</td>
                  <td>
                    <input type="text" value={crew} name="crew" onChange={(e) => setCrew(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>공연일자</td>
                  <td>
                    <input type="text" value={liveDate} name="liveDate" onChange={(e) => setLiveDate(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>공연 시간</td>
                  <td>
                    <input type="text" value={liveTime} name="liveTime" onChange={(e) => setLiveTime(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>지역</td>
                  <td>
                    <input type="text" value={location} name="location" onChange={(e) => setLocation(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>주소</td>
                  <td>
                    <input type="text" value={address} name="address" onChange={(e) => setAddress(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>티켓 가격</td>
                  <td>
                    <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
                  </td>
                </tr>
                <tr>
                  <td>수용인원</td>
                  <td>
                    <input type="text" value={maxTickets} name="maxTickets" onChange={(e) => setMaxTickets(e.target.value)}/>
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
                  <td>게시글 적성 에디터</td>
                  <td className="data">
                    <CKEditor
                    editor={ ClassicEditor }
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
                    data={content}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        setContent(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                  />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="bottomSubmit">
                    <div className="centered-buttons">
                      <button type="button" onClick={moveList}>
                        목록
                      </button>
                      <button type="button" onClick={actionUpdate}>
                        수정
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

export default UpdateForm