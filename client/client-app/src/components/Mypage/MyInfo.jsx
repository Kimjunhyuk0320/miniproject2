import React, { useEffect, useState, useContext } from 'react'
import $ from 'jquery';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContextProvider';

const MyInfo = ({ sets, userInfo, roles }) => {

  const { isLogin, login, logout } = useContext(LoginContext);
  const navigate = useNavigate;

  useEffect(() => {
    $('#expand-button__').click(function () {
      $('.profile____card').toggleClass('expand');
    })

  }, [])

  const [isExpanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <div className="background">
        <div style={{ height: '1000px' }}></div>
      </div>

      <div className={`profile____card`}>
        <div className="cover"></div>

        <div className="profile__">
          <div className="pic__">
            {userInfo?.profileNo === 0 || sets.fileSource ? (
              <img src={sets.fileSource ? sets.fileSource : "/img/defaultProfile.png"} alt="프로필사진" id="profile"
                style={{ width: '100px', height: '100px', borderRadius: '100%', boxShadow: '0px 0px 15px gray' }} />
            ) : (
              <img src={`/file/img/${userInfo?.profileNo}`} alt="프로필사진"
                style={{ width: '100px', height: '100px', borderRadius: '100%', boxShadow: '0px 0px 15px gray' }} />
            )}
          </div>
          <div className="above-fold">
            <div className="name">
              <p>{userInfo?.name}</p>
            </div>
            <div className="role">
              {/* <p>{userInfo?.username}</p> */}
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <p style={{ display: 'inline-block' }}>회원님의 권한은&nbsp;</p>
              <p style={{ display: 'inline-block' }}>"</p>
              <p style={{ display: 'inline-block' }}>
                {roles?.isUser === true ? "일반회원" : roles?.isBand === true ? "밴드회원" : "클럽회원"}
              </p>
              <p style={{ display: 'inline-block' }}>"</p>
              <p style={{ display: 'inline-block' }}>&nbsp;입니다.</p>
            </div>


            <div className="row__">
              <Link to="/myPage/update">
                <div className="button__">내 정보 수정</div>
              </Link>
              <Link onClick={() => logout()}>
                <div className="button__">로그아웃</div>
              </Link>
            </div>

            <div id="expand-button__" >↓</div>
          </div>

          <div className="below-fold">
            <div className="about">
              <h5>아이디</h5>
              <p>{userInfo?.username}</p>
              <br />
            </div>
            <div className="about">
              <h5>개인 연락처</h5>
              <p>{userInfo?.phone}</p>
              <br />
            </div>
            <div className="about">
              <h5>이메일</h5>
              <p>{userInfo?.email}</p>
              <br />
            </div>
            <div className="about">
              <h5>정보 수정 일자</h5>
              <p>{new Date(userInfo?.updDate).toLocaleDateString('ko-KR')}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInfo