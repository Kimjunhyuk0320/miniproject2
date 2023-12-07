import React from 'react'
import { Link } from 'react-router-dom';

const Join = ({ sets }) => {

  return (
    <>
      <div className="joinBody">
        <div id="join-container">
          <div className="join-Box">
            <section className="auth_main_box">
              <table>
                <tr>
                  <div className="form__group field">
                    <div className="dropzone">
                      {sets.file == null ? (
                        <div className="before-img-box hide">
                          {/* <img src={`/img/defaultProfile`} alt="프로필사진" /> */}
                        </div>
                      ) : (
                        <div className="img-box">
                          <img src={sets.fileSource} alt="프로필사진" />
                        </div>
                      )}
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
                          <input type="text" name="fileName" id="file-name" value={sets.fileName} readonly />
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
                </tr>
                <tr>
                  <div className="form__group field plus_flex">
                    <input type="text" className="form__field" placeholder="이름" name="name" id="name" value={sets.name} onChange={(e) => {
                      sets.setName(e.target.value)
                    }} />
                    <label htmlFor="name" className="form__label" >이름</label>
                    <select name="auth" id="group" className="dul_btn_size" value={sets.auth} onChange={(e) => {
                      sets.setAuth(e.target.value)
                    }}>
                      <option value="ROLE_USER">일반 사용자</option>
                      <option value="ROLE_CLUB">클럽</option>
                      <option value="ROLE_BAND">밴드</option>
                    </select>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field plus_flex">
                    <input type="text" className="form__field" placeholder="아이디" name="username" id="username" value={sets.username} onChange={(e) => {
                      if (sets.usernameChecked) {
                        sets.setUsernameChecked(false)
                        sets.setUsername(e.target.value)
                      } else {
                        sets.setUsername(e.target.value)
                      }
                    }} />
                    <label htmlFor="username" className="form__label">아이디</label>
                    <button name="btnLoginIdDupCheck" type="button"
                      className="btn btn-outline-dark dul_btn_size" onClick={() => {
                        sets.usernameCheckedHandler()
                      }}>아이디 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field">
                    <input type="password" className="form__field" placeholder="비밀번호" name="password" id="password" value={sets.password} onChange={(e) => {
                      sets.setPassword(e.target.value)
                    }} />
                    <label htmlFor="password" className="form__label">비밀번호</label>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field">
                    <input type="password" className="form__field" placeholder="비밀번호 확인" name="userPwCheck"
                      id="passwordCheck" value={sets.userPwCheck} onChange={(e) => {
                        sets.setUserPwCheck(e.target.value)
                      }} />
                    <label htmlFor="passwordCheck" className="form__label">비밀번호 확인</label>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field plus_flex">
                    <input type="text" className="form__field" placeholder="닉네임" name="nickname" id="nickname" value={sets.nickname} onChange={(e) => {
                      if (sets.nicknameChecked) {
                        sets.setNicknameChecked(false)
                        sets.setNickname(e.target.value)
                      } else {
                        sets.setNickname(e.target.value)
                      }
                    }} />
                    <label htmlFor="nickname" className="form__label">닉네임</label>
                    <button className="btn btn-outline-dark dul_btn_size"
                      name="btnNicknameDupCheck" type="button" onClick={() => {
                        sets.nicknameCheckedHandler()
                      }}>닉네임 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field plus_flex">
                    <input type="text" className="form__field" placeholder="연락처" name="phone" id="phone" value={sets.phone} onChange={(e) => {
                      if (sets.phoneChecked) {
                        sets.setPhoneChecked(false)
                        sets.setPhone(e.target.value)
                      } else {
                        sets.setPhone(e.target.value)
                      }
                    }} />
                    <label htmlFor="phone" className="form__label">연락처</label>
                    <button className="btn btn-outline-dark dul_btn_size"
                      name="btnPhoneDupCheck" type="button" onClick={() => {
                        sets.phoneCheckedHandler()
                      }}>연락처 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div className="form__group field">
                    <input type="text" className="form__field" placeholder="이메일" name="email" id="email" value={sets.email} onChange={(e) => {
                      sets.setEmail(e.target.value)
                    }} />
                    <label htmlFor="phone" className="form__label">이메일</label>
                  </div>
                </tr>
                <tr>
                </tr>
              </table>
            </section>
            <div className="submit_button">
              <input type="button" value="회원가입" onClick={() => {
                sets.joinHandler()
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Join