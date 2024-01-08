import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LoginContext } from '../../contexts/LoginContextProvider';

const UserUpdate = ({ sets, userInfo, updateUser }) => {

  // const { userInfo } = useContext(LoginContext);

  const onUpdate = (e) => {
    e.preventDefault()
    // alert("안녕~!")
    const form = e.target

    const file = sets.file
    // const file = form.file.value
    const username = form.username.value
    const name = form.name.value
    const auth = form.auth.value
    const password = form.password.value
    const userPwCheck = form.userPwCheck.value;
    const nickname = form.nickname.value;
    const phone = form.phone.value;
    const email = form.email.value;

    console.log(file, username, name, auth, password, userPwCheck, nickname, phone, email)

    if (sets.phoneChecked) {
      updateUser({ file, username, name, auth, password, nickname, phone, email })
    } else {
      alert("전화번호 중복검사를 실행해주세요.")
    }
  }

  return (
    <>
      <Helmet>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css'></link>
      </Helmet>
      <form onSubmit={(e) => onUpdate(e)}>
        <div id="topContent">
          <h1>내 정보 수정</h1>
          <p>회원님의 정보를 수정합니다.</p>
          <hr />
        </div>
        <div id="insertContainer">
          <div className="tableContainer">
            <table>
              <tbody>
                <tr>

                  <td colSpan={2}>
                    <div className="form__group field">
                      <div className="dropzone">
                        {
                          userInfo?.profileNo === 0 || sets.fileSource ? (
                            <div className="img-box hide">
                              <img src={sets.fileSource ? sets.fileSource : "/img/defaultProfile.png"} alt="프로필사진" id="profile" />
                            </div>
                          ) : (
                            <div className="img-box">
                              <img src={`/file/img/${userInfo?.profileNo}`} alt="프로필사진" />
                            </div>
                          )
                        }


                        <div className="add_thumbnail_box">
                          <div className="add_thumbnail">
                            <label htmlFor="thumbnail" className="btn-file file_upload_btn">프로필 사진 추가하기</label>
                            <input type="file" id="thumbnail" className="select_btn" name="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => {
                              // 선택된 파일이 있는 경우에만 처리
                              const selectedFile = e.target.files[0];

                              sets.setFile(selectedFile);
                              sets.setFileName(selectedFile.name);

                              const reader = new FileReader();
                              reader.onload = (e) => {
                                // 읽어들인 파일 데이터를 sets에 저장하거나 원하는 작업을 수행합니다.
                                // 예시로 sets에 fileSource 속성에 파일 데이터를 저장합니다.
                                sets.setFileSource(e.target.result);
                              };

                              reader.readAsDataURL(selectedFile);
                            }} />
                            <input type="text" name="fileName" id="file-name" value={sets.fileName} readOnly />
                            <Link className="btn btn-sm btn-thumb-remove hide">
                              <i className="fi fi-br-cross"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="drop-img flex col main-center sub-center">
                          <div className="upload-box">
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <td style={{ width: '150px' }}>프로필사진</td>
                  <td>
                    <input type="file" name="file" id="file" defaultValue={userInfo?.file} />
                  </td> */}
                </tr>
                <tr>
                  <td>이름</td>
                  <td>
                    <input type="text" name="name" id="name" readOnly defaultValue={userInfo?.name} />
                  </td>
                </tr>
                <tr>
                  <td>아이디</td>
                  <td>
                    <input type="text" name="username" id="username" readOnly defaultValue={userInfo?.username} />
                  </td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td>
                    {/* <form> */}
                    <input type="password" autoComplete='off' name="password" id="password" />
                    {/* </form> */}
                  </td>
                </tr>
                <tr>
                  <td>비밀번호 확인</td>
                  <td>
                    {/* <form> */}
                    <input type="password" autoComplete='off' name="userPwCheck" id="passwordCheck" />
                    {/* </form> */}
                  </td>
                </tr>
                <tr>
                  <td>닉네임</td>
                  <td>
                    <input type="text" name="nickname" id="nickName" defaultValue={userInfo?.nickname}
                    onChange={(e) => {
                      if (sets.nicknameChecked) {
                        sets.setNicknameChecked(false)
                        sets.setNickname(e.target.value)
                      } else {
                        sets.setNickname(e.target.value)
                      }
                    }
                    }
                    />
                    <button onClick={() => {
                      sets.nicknameCheckedHandler()
                    }} name="btnNicknameDupCheck" type="button" className="btn btn-outline-dark dul_btn_size" style={{ marginTop: '20px' }}>닉네임 중복 검사</button>
                  </td>
                </tr>
                <tr>
                  <td>연락처</td>
                  <td>
                    <input type="text" name="phone" id="phone" defaultValue={userInfo?.phone}
                    onChange={(e) => {
                      if (sets.phoneChecked) {
                        sets.setPhoneChecked(false)
                        sets.setPhone(e.target.value)
                      } else {
                        sets.setPhone(e.target.value)
                      }
                    }} 
                    />
                    <button onClick={() => {
                      sets.phoneCheckedHandler()
                    }} name="btnPhoneDupCheck" type="button" className="btn btn-outline-dark dul_btn_size" style={{ marginTop: '20px' }}>연락처 중복 검사</button>
                  </td>
                </tr>
                <tr>
                  <td>소속</td>
                  <td>
                    <select name="auth" id="group" >
                      <option value="0">일반 사용자</option>
                      <option value="1">클럽</option>
                      <option value="2">밴드</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>
                    <input type="text" name="email" id="email" defaultValue={userInfo?.email} />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="submit_button">
            <button type='submit' id="btn">회원정보 수정</button>
          </div>
        </div >
      </form>
    </>
  )
}

export default UserUpdate