import React, {useState} from 'react'
// css 임포트
import './css/MyInfo.css';

const MyInfo = () => {

  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <div className="background">
        <div style={{ height: '1000px' }}></div>
      </div>

      <div className={`profile____card ${isExpanded ? 'expand' : ''}`}>
        <div className="cover"></div>

        <div className="profile__">
          <div className="pic__">
            {/* 프로필 사진이 있을 때 */}
            {/* <img
              alt="프로필사진"
              id="profile Img"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '100%',
                boxShadow: '0px 0px 15px gray'
              }}
            /> */}
            <img
              src="/img/defaultProfile.png"
              alt="프로필사진"
              id="profile Img"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '100%',
                boxShadow: '0px 0px 15px gray'
              }}
            />
          </div>

          <div className="above-fold">
            <div className="name">
              <p>dfddd</p>
            </div>
            <div className="role">
              <p>dsnfl</p>
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <p style={{ display: 'inline-block' }}>회원님은</p>
              <p style={{ display: 'inline-block' }}> ### </p>
              <p style={{ display: 'inline-block' }}>이십니다.</p>
            </div>

            <div className="row__">
              <a href="/update">
                <div className="button__">내 정보 수정</div>
              </a>
              <a href="#">
                {/* onClick={logOut}> */}
                <div className="button__">로그아웃</div>
              </a>
            </div>

            <div id="expand-button__"  onClick={handleExpandClick}>↓</div>
          </div>

          <div className="below-fold">
            <div className="about">
              <h3>아이디</h3>
              <p>;kdsafnkls</p>
              <br />
            </div>
            <div className="about">
              <h3>연락처</h3>
              <p>lsadfhosd</p>
              <br />
            </div>
            <div className="about">
              <h3>이메일</h3>
              <p>pisdfhl</p>
              <br />
            </div>
            <div className="about">
              <h3>정보 수정 일자</h3>
              <p>dsafas</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInfo