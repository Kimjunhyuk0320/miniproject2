import React from 'react'

const Join = ({ sets }) => {

  return (
    <>
      <div class="joinBody">
        <div id="join-container">
          <div class="join-Box">
            <section class="auth_main_box">
              <table>
                <tr>
                  <div class="form__group field">
                    <div class="dropzone">
                      {sets.file == null ? (
                        <div class="before-img-box hide">
                          <img src={`/img/defaultProfile`} alt="프로필사진" />
                        </div>
                      ) : (
                        <div class="img-box">
                          <img src={sets.fileSource} alt="프로필사진" />
                        </div>
                      )}
                      <div class="add_thumbnail_box">
                        <div class="add_thumbnail">
                          <label for="thumbnail" class="btn-file file_upload_btn">프로필 사진 추가하기</label>
                          <input type="file" id="thumbnail" class="select_btn" name="file" accept="image/*" style={{ display: none }} onChange={(e) => {
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
                          <a href="javascript:;" class="btn btn-sm btn-thumb-remove hide">
                            <i class="fi fi-br-cross"></i>
                          </a>
                        </div>
                      </div>

                      <div class="drop-img flex col main-center sub-center">
                        <div class="upload-box">
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="이름" name="name" id="name" />
                    <label for="name" class="form__label" value={sets.name} onChange={(e)=>{
                      sets.setName(e.target.value)
                    }}>이름</label>
                    <select name="auth" id="group" class="dul_btn_size" value={sets.auth} onChange={(e)=>{
                      sets.setAuth(e.target.value)
                    }}>
                      <option value="ROLE_USER">일반 사용자</option>
                      <option value="ROLE_CLUB">클럽</option>
                      <option value="ROLE_BAND">밴드</option>
                    </select>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="아이디" name="username" id="username" value={sets.username} onChange={(e)=>{
                      sets.setUsername(e.target.value)
                    }}/>
                    <label for="username" class="form__label">아이디</label>
                    <button name="btnLoginIdDupCheck" type="button"
                      class="btn btn-outline-dark dul_btn_size">아이디 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="password" class="form__field" placeholder="비밀번호" name="password" id="password" value={sets.password} onChange={(e)=>{
                      sets.setPassword(e.target.value)
                    }}/>
                    <label for="password" class="form__label">비밀번호</label>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="password" class="form__field" placeholder="비밀번호 확인" name="userPwCheck"
                      id="passwordCheck" value={sets.userPwCheck} onChange={(e)=>{
                        sets.setUserPwCheck(e.target.value)
                      }}/>
                    <label for="passwordCheck" class="form__label">비밀번호 확인</label>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="닉네임" name="nickname" id="nickname" value={sets.nickName} onChange={(e)=>{
                      sets.setNickName(e.target.value)
                    }}/>
                    <label for="nickname" class="form__label">닉네임</label>
                    <button class="btn btn-outline-dark dul_btn_size" 
                      name="btnNicknameDupCheck" type="button">닉네임 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="연락처" name="phone" id="phone" value={sets.phone} onChange={(e)=>{
                      sets.setPhone(e.target.value)
                    }}/>
                    <label for="phone" class="form__label">연락처</label>
                    <button class="btn btn-outline-dark dul_btn_size" 
                      name="btnPhoneDupCheck" type="button">연락처 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="text" class="form__field" placeholder="이메일" name="email" id="email" value={sets.email} onChange={(e)=>{
                      sets.setEmail(e.target.value)
                    }}/>
                    <label for="phone" class="form__label">이메일</label>
                  </div>
                </tr>
                <tr>
                </tr>
              </table>
            </section>
            <div class="submit_button">
              <input type="button" value="회원가입" onClick={()=>{
                sets.insertHandler()
              }}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Join