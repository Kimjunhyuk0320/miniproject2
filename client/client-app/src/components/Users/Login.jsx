import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ sets }) => {
  return (
    <>
      <div className="body1">
        <div className="body2">
          <section className="login-form">
            <h1>로그인</h1>
            <div className="int-area">
              <input type="text" name="username" id="id" value={sets.username} autoComplete="off" onChange={(e) => {
                sets.setUsername(e.target.value)
              }} required />
              <label htmlFor="id">아이디</label>
            </div>
            <div className="int-area">
              <form>
                <input type="password"  name="password" id="pw" autoComplete="off" value={sets.password} onChange={(e) => {
                  sets.setPassword(e.target.value)
                }} required />
              </form>
              <label htmlFor="pw">비밀번호</label>
            </div>

            <div className="btn-div">
              <div>
                <input type="checkbox" name="rememberId" id="remember-id" value={sets.rememberId} onChange={(e) => {
                  sets.setRememberId(e.target.value)
                }} />
                <label htmlFor="remember-id">아이디 저장</label>
              </div>

              <div>
                <input type="checkbox" name="remember-me" id="remember-me" value={sets['remember-me']} onChange={(e) => {
                  sets.setRemeberMe(e.target.value)
                }} />
                <label htmlFor="remember-me">자동 로그인</label> <br />
              </div>
            </div>

            <div className="btn-area">
              <button id="btn" onClick={() => {
                sets.loginHandler()
              }}>LOGIN</button>
            </div>

            <div className="caption">
              <Link to={`/join`}>
                <span>회원가입</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default Login