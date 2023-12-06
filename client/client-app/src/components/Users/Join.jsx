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
                      <div class="before-img-box hide">
                      </div>
                      <div class="img-box">
                      </div>
                      <div class="add_thumbnail_box">
                        <div class="add_thumbnail">
                          <label for="thumbnail" class="btn-file file_upload_btn">프로필 사진 추가하기</label>
                          <input type="file" id="thumbnail" class="select_btn" name="file" accept="image/*" style="display: none;" />
                          <input type="text" name="fileName" id="file-name" readonly />
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
                    <label for="name" class="form__label">이름</label>
                    <select name="auth" id="group" class="dul_btn_size">
                      <option value="ROLE_USER">일반 사용자</option>
                      <option value="ROLE_CLUB">클럽</option>
                      <option value="ROLE_BAND">밴드</option>
                    </select>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="아이디" name="username" id="username" />
                    <label for="username" class="form__label">아이디</label>
                    <button onclick="joinFrom_checkedLoginIdDup(this);" name="btnLoginIdDupCheck" type="button"
                      class="btn btn-outline-dark dul_btn_size">아이디 중복 검사</button>
                  </div>
                  <input type="hidden" id="checkUserName" value="0" />
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="password" class="form__field" placeholder="비밀번호" name="password" id="password" />
                    <label for="password" class="form__label">비밀번호</label>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="password" class="form__field" placeholder="비밀번호 확인" name="userPwCheck"
                      id="passwordCheck" />
                    <label for="passwordCheck" class="form__label">비밀번호 확인</label>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="닉네임" name="nickname" id="nickname" />
                    <label for="nickname" class="form__label">닉네임</label>
                    <input type="hidden" id="checkUserNickname" value="0" />
                    <button class="btn btn-outline-dark dul_btn_size" onclick="joinFrom_checkedNicknameDup(this);"
                      name="btnNicknameDupCheck" type="button">닉네임 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field plus_flex">
                    <input type="text" class="form__field" placeholder="연락처" name="phone" id="phone" />
                    <label for="phone" class="form__label">연락처</label>
                    <input type="hidden" id="checkUserPhone" value="0" />
                    <button class="btn btn-outline-dark dul_btn_size" onclick="joinFrom_checkedPhoneDup(this);"
                      name="btnPhoneDupCheck" type="button">연락처 중복 검사</button>
                  </div>
                </tr>
                <tr>
                  <div class="form__group field">
                    <input type="text" class="form__field" placeholder="이메일" name="email" id="email" />
                    <label for="phone" class="form__label">이메일</label>
                  </div>
                </tr>
                <tr>
                </tr>
              </table>
            </section>
            <div class="submit_button">
              <input type="submit" value="회원가입" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Join