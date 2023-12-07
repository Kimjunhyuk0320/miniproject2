import React from 'react'
// 게시글 에디터
import * as filesApi from '../../apis/file/fileApi'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';

const TeamReg = ({sets}) => {
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
                // console.log(file);
                formData.append("parentTable", 'editor');
                formData.append("file", file);

                const headers = {
                    headers: {
                        'Content-Type' : 'multipart/form-data',
                    },
                };

                let response = await filesApi.upload(formData, headers);
                let data = await response.data;
                // console.log(`data : ${data}`);
                
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
            <h1>공연팀 참가 신청</h1>
            <p>공연팀 참가 신청글을 작성합니다. 꼼꼼하게 수정해 주세요.</p>
            <hr/>
        </div>
        <div id="insertContainer">
            <div className="tableContainer">
                <table>
                <tr>
                    <td>제목</td>
                    <td>
                    <input type="text" name="title" id="title" value={sets.title} onChange={(e)=>{
                        sets.setTitle(e.target.value)
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td>밴드명</td>
                    <td>
                    <input type="bandName" name="bandName" id="bandName" value={sets.bandName} onChange={(e)=>{
                        sets.setBandName(e.target.value)
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td>게시글 적성 에디터</td>
                    <td>
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
                                    height: 1000, // Set the desired height in pixels
                                },
                                alignment: {
                                    options: ['left', 'center', 'right', 'justify'],
                                },
                                
                                extraPlugins: [uploadPlugin]            // 업로드 플러그인
                            }}
                            data=""
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                // console.log( { event, editor, data } );
                                sets.setContent(data)
                            } }
                            onBlur={ ( event, editor ) => {
                                // console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                // console.log( 'Focus.', editor );
                            } }
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <div className="submitDiv">
                        <Link to="/teamList">
                                      <button type="button" >목록</button>
                        </Link>
                        <button onClick={sets.regHandler}>참가신청</button>
                    </div>
                    </td>
                </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default TeamReg