import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContextProvider'


const Login = ({ sets }) => {

  const { login, isLogin } = useContext(LoginContext)

  const onLogin = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    login(username, password, sets.rememberId, sets.rememberMe)
  }

  return (
    <>
      <form id="loginForm" onSubmit={(e) => onLogin(e)} >
        <div className="body1">
          <div className="body2">
            <section className="login-form">
              <h1>로그인</h1>
              <div className="int-area">
                <input type="text"
                  name="username"
                  id="id"
                  value={sets.username}
                  autoComplete="off"
                  onChange={(e) => {
                    sets.setUsername(e.target.value)
                  }}
                  required />
                <label htmlFor="id">아이디</label>
              </div>
              <div className="int-area">
                <input type="password"
                  name="password"
                  id="pw"
                  autoComplete="off"
                  value={sets.password}
                  onChange={(e) => {
                    sets.setPassword(e.target.value)
                  }}
                  required />
                <label htmlFor="pw">비밀번호</label>
              </div>

              <div className="btn-div">
                <div>
                  <input 
                    type="checkbox" 
                    name="rememberId" 
                    id="remember-id" 
                    checked={sets.rememberId} 
                    onChange={(e) => {
                      sets.setRememberId(e.target.checked)
                    }} 
                  />
                  <label htmlFor="remember-id">아이디 저장</label>
                </div>
                <div>
                  <input 
                    type="checkbox" 
                    name="rememberMe" 
                    id="remember-me" 
                    checked={sets.rememberMe}  
                    onChange={(e) => {
                      sets.setRememberMe(e.target.checked)
                    }}
                   />
                  <label htmlFor="remember-me">자동 로그인</label> <br />
                </div>
              </div>

              <div className="btn-area">
                {/* <button type='buttton' id="btn" onClick={onLogin}>LOGIN</button> */}
                <button id="btn">LOGIN</button>
              </div>

              <div className="caption">
                <Link to={`/join`}>
                  <span>회원가입을 진행할까요?</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
