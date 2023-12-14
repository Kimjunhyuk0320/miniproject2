import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// 게시글 에디터
import * as filesApi from '../../apis/file/fileApi'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UserContext from '../../context/UserContext'

const FacilityRentalInsert = ({ sets }) => {
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
                <div>
                    <h1>대관 게시글 작성</h1>
                    <p>대관 게시글을 작성합니다. 꼼꼼하게 작성해 주세요.</p>
                    <hr />
                </div>
            </div>
            <div id="insertContainer">
                <div className="tableContainer">
                    <table>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" name="title" id="title" value={sets.title} onChange={(e) => {
                                    sets.setTitle(e.target.value)
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>
                                <input type="text" name="price" id="price" value={sets.price} onChange={(e) => {
                                    sets.setPrice(e.target.value)
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td>대관일자</td>
                            <td>
                                <input type="date" name="liveDate" value={sets.liveDate} onChange={(e) => {
                                    sets.setLiveDate(e.target.value)
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td>계좌번호</td>
                            <td className="account-inputs">
                                <select name="account1" id="account1"
                                    value={sets.account1} onChange={(e) => {
                                        sets.setAccount1(e.target.value)
                                    }}>
                                    <option value="신한은행">신한은행</option>
                                    <option value="우리은행">우리은행</option>
                                    <option value="하나은행">하나은행</option>
                                    <option value="SC은행">SC은행</option>
                                    <option value="도이치은행">도이치은행</option>
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
                                <input type="text" name="account2" id="account2" value={sets.account2} onChange={(e) => {
                                    sets.setAccount2(e.target.value)
                                }} />
                            </td>
                        </tr>

                        <tr>
                            <td>지역</td>
                            <td>
                                <select name="location" value={sets.location} onChange={(e) => {
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
                                <input type="text" name="address" id="address" value={sets.address} onChange={(e) => {
                                    sets.setAddress(e.target.value)
                                }} />
                            </td>
                        </tr>
                        <tr>
                            <td className="label">썸네일</td>
                            <td className="data">
                                <div className="dropzone">
                                    <input type="file" id="thumbnail" accept="image/*" name="file" onChange={(e) => {
                                        sets.setFile(e.target.files)
                                    }} />
                                    <a href="javascript:;" className="btn btn-sm btn-thumb-remove hide">삭제</a>
                                    <div className="drop-img flex col main-center sub-center">
                                        <div className="upload-box">
                                        </div>
                                        <div className="img-box hide"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>게시글 적성 에디터</td>
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
                                            height: 1000, // Set the desired height in pixels
                                        },
                                        alignment: {
                                            options: ['left', 'center', 'right', 'justify'],
                                        },

                                        extraPlugins: [uploadPlugin]            // 업로드 플러그인
                                    }}
                                    data=""
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                        sets.setContent(data)
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
                            <td colspan="2" className="bottomSubmit">
                                <div className="centered-buttons">
                                    <Link to="/frList">
                                        <button type="button" >목록</button>
                                    </Link>
                                    <button type="button" onClick={() => {
                                        sets.insertHandler()
                                    }}>등록</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div >
        </>
    )
}

export default FacilityRentalInsert