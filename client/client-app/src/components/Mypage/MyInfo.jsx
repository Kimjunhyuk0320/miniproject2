import React, { useContext, useEffect, useState } from 'react'
import * as userInfo from '../../apis/myPage/myPageApi';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import * as format from '../../apis/format/format'

const MyInfo = () => {

  const { jwtSets } = useContext(UserContext)

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
            {/* 프로필 사진이 있을 때 */}
            {/* <img alt="프로필사진" id="profile Img" style={{ width: '100px', height: '100px', borderRadius: '100%', boxShadow: '0px 0px 15px gray'}} /> */}
            <img src="/img/defaultProfile.png" alt="프로필사진" id="profile Img" style={{ width: '100px', height: '100px', borderRadius: '100%', boxShadow: '0px 0px 15px gray' }} />
          </div>
          <div className="above-fold">
            <div className="name">
              <p>{jwtSets.parsedToken.name??''}</p>
            </div>
            <div className="role">
              <p>{jwtSets.parsedToken.nickname??''}</p>
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <p style={{ display: 'inline-block' }}>회원님은</p>
              <p style={{ display: 'inline-block' }}>{(jwtSets.parsedToken.auth).split('_')[1]}</p>
              <p style={{ display: 'inline-block' }}>이십니다.</p>
            </div>

            <div className="row__">
              <Link to="/myPage/update">
                <div className="button__">내 정보 수정</div>
              </Link>
              <a href="#" onClick={jwtSets.logout}>
                {/* onClick={logOut}> */}
                <div className="button__">로그아웃</div>
              </a>
            </div>

            <div id="expand-button__" >↓</div>
          </div>

          <div className="below-fold">
            <div className="about">
              <h5>아이디</h5>
              <p>{jwtSets.parsedToken.username ?? 'GUEST'}</p>
              <br />
            </div>
            <div className="about">
              <h5>연락처</h5>
              <p>{jwtSets.parsedToken.phone ?? ''}</p>
              <br />
            </div>
            <div className="about">
              <h5>이메일</h5>
              <p>{jwtSets.parsedToken.email ?? ''}</p>
              <br />
            </div>
            <div className="about">
              <h5>정보 수정 일자</h5>
              <p>{format.formatDate(jwtSets.parsedToken.updDate)}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInfo