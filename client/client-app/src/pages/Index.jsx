import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


const StyledDiv = styled.div`
  body {
    overflow-x: hidden;
  }

  /* 동영상 관련 css */
  /* .bg-video {
        height: 100vh;
        z-index: -1;
    }

    .bg-video__content {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .video_detail {
        z-index: 100;
        color: white;
    }

    .video_detail a {
        z-index: 101;

    } */

  /* 비디오 위의 텍스트에 관한 설정 */
  /* .video_detail_text {
        position: absolute;
        top: 35%;
        left: 5%;
        transform: translate(-50%, -50%);

        opacity: 0;
        transform: translateY(30px);
        transition: all 1s ease-out;
    }

    .video_detail_text.show {
        opacity: 1;
        transform: translateY(0);
    }

    .video_detail_text h1 {
        font-size: 80px;
    }

    .video_detail img {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100px;
        width: 300px;
        object-fit: cover;
        opacity: 0.75;
    }


    /* 클랙했을 때 아래로 내려가는 css */
  /* .click_for_scroll {
        font-size: 30px;
        position: absolute;
        top: 92%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

    @keyframes moveUpDown {

        0%,
        100% {
            transform: translateY(0);
        }

        90% {
            transform: translateY(5px);
        }
    }

    .click_for_scroll {
        animation: moveUpDown 2s linear infinite;
    } */

  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .headerCon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 6rem;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerCon .logo {
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }

  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    background: url(https://i.ibb.co/HrfVRcx/menu.png);
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
    cursor: pointer;
  }

  .toggle.active {
    background: url(https://i.ibb.co/rt3HybH/close.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: center;
    cursor: pointer;
  }

  .total_box {
    height: 300vh;
  }

  .total_box_inner {
    position: sticky;
    top: 0;
  }

  .showcase {
    position: absolute;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;
    transition: 0.5s;
    z-index: 2;
  }

  .showcase.active {
    right: 280px;
  }

  .showcase video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #03a9f4;
    mix-blend-mode: overlay;
  }

  .text_ {
    position: absolute;
    top: 35%;
    left: 7%;
    z-index: 10;
  }

  .text_ h2 {
    font-size: 4.5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  .text_ h3 {
    font-size: 2.8em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }

  .text_ p {
    font-size: 1.1em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
  }

  .text_ a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: #111;
    letter-spacing: 2px;
    transition: 0.2s;
  }

  .text_ a:hover {
    letter-spacing: 6px;
  }

  .social_ {
    position: absolute;
    z-index: 10;
    left: 3.4rem;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social_ li {
    list-style: none;
    width: 30px;
  }

  .social_ li a {
    display: inline-block;
    margin-right: 20px;
    filter: invert(1);
    transform: scale(0.5);
    transition: 0.5s;
  }

  .social_ li a:hover {
    transform: scale(0.5) translateY(-15px);
  }

  .social_>a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .menu_ {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu_ ul {
    position: relative;
  }

  .menu_ ul li {
    list-style: none;
  }

  .menu_ ul li a {
    text-decoration: none;
    font-size: 24px;
    color: white;
  }

  .menu_ ul li a:hover {
    color: #03a9f4;
  }

  @media (max-width: 991px) {

    .showcase,
    .showcase header {
        padding: 40px;
    }

    .text_ h2 {
        font-size: 3em;
    }

    .text_ h3 {
        font-size: 2em;
    }
  }



  .section5 {
    height: 100vh;
    background-color: black;
    color: white;
  }

  /* 클랙했을 때 아래로 내려가는 css */
  .click_for_scroll {
    font-size: 30px;
    color: white;
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    animation: moveUpDown 2s linear infinite;
  }

  @keyframes moveUpDown {

    0%,
    100% {
        transform: translateY(0);
    }

    90% {
        transform: translateY(5px);
    }
  }

  .forImg img {
    width: 800px;
    object-fit: cover;
    /* background-color: rgba(0, 0, 0); */
    /* opacity: 0.8; */
  }

  /* section3 부분 */
  .scroller {
    max-width: 600px;
  }

  .scroller__inner {
    padding-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg,
            transparent,
            white 20%,
            white 80%,
            transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  }

  .scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
  }

  .scroller__inner img {
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
    border-radius: 15px;
    height: 200px;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 60s;
  }

  @keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
  }

  /* general styles */

  :root {
    --clr-neutral-100: hsl(0, 0%, 100%);
    --clr-primary-100: hsl(205, 15%, 58%);
    --clr-primary-400: hsl(215, 25%, 27%);
    --clr-primary-800: hsl(217, 33%, 17%);
    --clr-primary-900: hsl(218, 33%, 9%);
  }

  html {
    color-scheme: dark;
  }

  .box_scoll {
    display: grid;
    min-block-size: 100vh;
    place-content: center;
    font-family: system-ui;
    font-size: 1.125rem;
    background-color: ;
    /* background-color: var(--clr-primary-800); */
  }

  .tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
  }

  .tag-list li {
    padding: 1rem;
    background: var(--clr-primary-400);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
    color: white;
    padding: 10px 25px;
  }

  /* for testing purposed to ensure the animation lined up correctly */
  .test {
    background: red !important;
  }

  .section2_box {
    display: flex;
    
  }

  /* section2 구역 */
  .box_inner_R {
    border: white;
    color: white;
  }

  .box_inner_L {
    border: white;
    color: white;
  }

  .box_inner_R_top  {
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
    justify-content: start;
    padding-top: 5rem;
  }

  .box_inner_R_bottom {
    width: 50vw;
    height: 50vh;
    border-top: 1px solid gray;
  }

  .box_inner_L_both {
    width: 50vw;
    height: 100vh;
    border-left: 1px solid gray;
  }

  /* section2 텍스트 */
  .box_inner_R_top h1:nth-child(1) {
    margin-left: 5rem;
    font-size: 6.5em;
    font-weight: 800;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }
  .box_inner_R_top h1:nth-child(2) {
    margin-left: 5rem;
    font-weight: 300;
  } 
  .box_inner_R_top h1:nth-child(3) {
    margin-left: 5rem;
    font-weight: 300;
  } 
  .box_inner_R_top h1:nth-child(4) {
    margin-left: 5rem;
    font-weight: 500;
  } 

  .box_inner_R_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 세로로 긴 이미지 */
  .box_inner_R_bottom .img_box {
    display: flex;
    column-gap: 20%;
    justify-content: space-around;
    /* align-items: center; */
    /* margin: 1.5rem; */
  }

  .box_inner_R_bottom img {
    /* margin: 5rem 0; */
    width: 9rem;
    height: 17rem;
    border-radius: 10px;
    object-fit: cover;
  }

  .staticVideoSection iframe {
    border-radius: 20px;
    margin: 2rem 0 2rem 2rem;
  }

  /* 가로로 긴 이미지 */
  .widthImg {
    display: flex;
    justify-content: space-around;
  }

  .widthImg img {
    width: 17rem;
    height: 10rem;
    border-radius: 10px;
    object-fit: cover;
    
  }


`;


const Index = () => {
  return (
    <StyledDiv>
      <Helmet>
        <title>LiveDom</title>
        <link rel="stylesheet" href="/css/index.css" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
      </Helmet>


      <div className="total_box">
        <div className="total_box_inner">
          <section className="showcase">
            <div className="headerCon">
              <a href="/liveBoard">
                <img src="/img/loginWhite.png" style={{ marginTop: '10px', height: '50px', objectFit: 'cover' }} />
              </a>
              <div className="toggle"></div>
            </div>
            {/* 동영상 */}
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src="/img/indexMainVideo.webm" type="video/webm" />
                <source src="img/video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="overlay"></div>
            <div className="text_">
              <h2>Making live shows</h2>
              <h3>more accessible than ever before</h3>
              <p>
                LiveDom에 오신 것을 환영합니다. LiveDom은 클럽 대관, 공연 예약, 공연 팀 모집의 세 가지 주요 서비스를 제공하는 공간입니다.
                좋아하는 아티스트의 공연을 예약하고, 나만의 공연을 계획하며, 같은 꿈을 꾸는 아티스트들과 팀을 이루는 음악적 여정을 LiveDom에서 시작해보세요. <br />
                LiveDom에서는 여러분이 공연의 주인공이 됩니다. 여러분의 라이브를 만나보세요!
              </p>
              <a href="/liveBoard">메인화면</a>
            </div>
            <ul className="social_">
              <a href="https://www.facebook.com/" target="_blank">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="https://www.snapchat.com/" target="_blank">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="icon ion-social-instagram"></i>
              </a>
            </ul>
          </section>
          <div className="click_for_scroll">
            <i className="fi fi-rr-angle-down"></i>
          </div>
          <div className="menu_">
            <form action="/logout" method="POST" id="logoutForm">
              {/* <input type="hidden" th: name="${_csrf.parameterName}" th: value="${_csrf.token}" /> */}
              <input type="hidden" />
            </form>
            <ul>
              <li><a href="/facilityRental/list"><i className="fi fi-rr-calendar-clock"></i>   클럽대관</a></li>
              <br />
              <li><a href="/liveBoard"><i className="fi fi-rs-music-alt"></i>   공연보기</a></li>
              <br />
              <li><a href="/team"><i className="fi fi-rs-chart-tree"></i>   공연팀 모집</a></li>
              <br />
              {/* <th: block sec: authorize="isAnonymous()"> */}
              <li><a href="/join"><i className="fi fi-rr-user-add"></i>   회원가입</a></li>
              <br />
              <li><a href="/login"><i className="fi fi-rr-sign-in-alt"></i>   로그인</a></li>
              {/* </th: block> */}
              {/* <th: block sec: authorize="isAuthenticated()"> */}
              <li><a href="/myPage"><i className="fi fi-rr-sign-in-alt"></i>   마이페이지</a></li>
              <br />
              {/* logOut onclick속성 */}
              {/* <li><a href="#" onClick={logOut}><i className="fi fi-rr-sign-out-alt"></i>   로그아웃</a></li> */}
              {/* </th: block> */}
            </ul>
          </div>
          <section className="section1" style={{ height: '100vh', backgroundColor: 'black' }}>
            {/* 메인 동영상을 깔고있는 배경이므로 아무것도 넣지 말 것 */}
          </section>
        </div>
      </div>

      <section className="section2" style={{ height: '100vh', backgroundColor: 'black' }}>
        <div className="section2_box">
          <div className="box_inner_R">
            {/* 1번 텍스트 */}
            <div className="box_inner_R_top">
              <h1>Live Dom</h1>
              <h1>더 나은 음악, 더 나은 경험.</h1>
              <h1>음악의 모든 순간을 함께하는 곳.</h1>
            </div>
            {/* 2번칸 이미지 */}
            <div className="box_inner_R_bottom">
              <div className="img_box">
                <img src="/img/mainimg1.jpeg" alt="" />
                <img src="/img/mainimg2.jpeg" alt="" />
                <img src="/img/mainimg3.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="box_inner_L">
            <div className="box_inner_L_both">
              <div className="widthImg" style={{ height: '40vh', padding: '5rem 2rem' }}>
                <img src="/img/mainimg7.png" alt="" />
                <img src="/img/mainimg8.png" alt="" />
              </div>
              <div className="box_inner_R_bottom">
                {/*  */}
                <div className="box_inner_R_top">
                  <h1 style={{ fontSize: '5.5rem' }}>클럽 대관</h1>
                  <h1>무대가 필요한 순간</h1>
                  <h1>Live Dom이 함께합니다.</h1>
                  <a href="/facilityRental/list">
                    <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4" style={{ height: '100vh', backgroundColor: 'black' }}>
        <div className="section2_box">
          <div className="box_inner_R">
            {/* 2번칸 텍스트 */}
            <div className="box_inner_R_top">
              <h1 style={{ fontSize: '5.5rem' }}>공연</h1>
              <h1>음악을 듣고, 함께 만들고,</h1>
              <h1>당신의 음악, Live Dom이 함께합니다.</h1>
              <a href="/liveBoard">
                <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
              </a>
            </div>
            <div className="box_inner_R_bottom">
              <div className="img_box">
                <img src="/img/mainimg12.png" alt="" />
                <img src="/img/mainimg13.png" alt="" />
                <img src="/img/mainimg14.png" alt="" />
              </div>
            </div>
          </div>
          <div className="box_inner_L">
            <div className="box_inner_L_both">
              <div className="staticVideoSection">
                {/* YouTube Video Embed Code */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TZrYtpmclzA" frameBorder="0" allowFullScreen title="YouTube Video"></iframe>
              </div>
              <div className="box_inner_R_bottom">
                <div className="box_inner_R_top">
                  <h1 style={{ fontSize: '5.5rem' }}>공연 팀 모집</h1>
                  <h1>음악을 만들어가는 여정</h1>
                  <a href="/team">
                    <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4" style={{ height: '50vh', backgroundColor: 'black' }}>
        <div className="section2_box">
          <div className="box_inner_R">
            <div className="box_inner_R_top" style={{ height: '50vh' }}>
              <div className="widthImg">
                <img src="/img/mainimg10.png" alt="" />
                <img src="/img/mainimg11.png" alt="" />
              </div>
            </div>
          </div>
          <div className="box_inner_L">
            <div className="box_inner_L_both" style={{ height: '50vh' }}>
              <div className="staticVideoSection" style={{ height: '50vh' }}>
                {/* YouTube Video Embed Code */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OZJ6nRCkAjo" frameBorder="0" allowFullScreen title="YouTube Video"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledDiv>

  )
}

export default Index