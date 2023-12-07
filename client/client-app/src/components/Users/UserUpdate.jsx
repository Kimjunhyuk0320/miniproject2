import React from 'react'

const UserUpdate = ({ sets }) => {
  return (
    <>
      <div id="topContent">
        <h1>내 정보 수정</h1>
        <p>회원님의 정보를 수정합니다.</p>
        <hr />
      </div>
      <div id="insertContainer">
        <div className="tableContainer">
          <table>
            <tr>
              <td style={{ width: '150px' }}>프로필사진</td>
              <td>
                <input type="file" name="file" id="file" onChange={(e)=>{
                  sets.setFile(e.target.files[0])
                }}/>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <input type="text" name="name" id="name" value={sets.name} readonly />
              </td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" name="username" id="username" readonly value={sets.username} />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" name="password" id="password" value={sets.password} onChange={(e)=>{
                  sets.setPassword(e.target.value)
                }} />
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input type="password" name="userPwCheck" id="passwordCheck" value={sets.userPwCheck} onChange={(e)=>{
                  sets.setUserPwCheck(e.target.value)
                }} />
              </td>
            </tr>
            <tr>
              <td>닉네임</td>
              <td>
                <input type="text" name="nickname" id="nickName" value={sets.nickname} onChange={(e)=>{
                  sets.setNickname(e.target.value)
                }} />
                <button onClick="joinFrom_checkedNicknameDup();" name="btnNicknameDupCheck" type="button" className="btn btn-outline-dark dul_btn_size" style={{ marginTop: '20px' }}>닉네임 중복 검사</button>
              </td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>
                <input type="text" name="phone" id="phone" value={sets.phone} onChange={(e)=>{
                  sets.setPhone(e.target.value)
                }} />
                <button onClick="joinFrom_checkedPhoneDup();" name="btnPhoneDupCheck" type="button" className="btn btn-outline-dark dul_btn_size" style={{ marginTop: '20px' }}>연락처 중복 검사</button>
              </td>
            </tr>
            <tr>
              <td>소속</td>
              <td>
                <select name="auth" id="group" value={sets.auth} onChange={(e)=>{
                  sets.setAuth(e.target.value)
                }}>
                  <option value="ROLE_USER">일반 사용자</option>
                  <option value="ROLE_CLUB">클럽</option>
                  <option value="ROLE_BAND">밴드</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input type="text" name="email" id="email" value={sets.email} onChange={(e)=>{
                  sets.setEmail(e.target.value)
                }} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="submitDiv">
                  <input type="button" value="수정" onClick={()=>{
                    sets.updateHandler()
                  }}/>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div >
    </>
  )
}

export default UserUpdate