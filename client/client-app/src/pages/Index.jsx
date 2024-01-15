import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import './index.css';
import LoginContextConsumer from '../contexts/LoginContextConsumer';
import { LoginContext } from '../contexts/LoginContextProvider';

//  app.css 에 공통적인 부분

const Index = () => {

  // 아래 버튼을 누르면 아래로 내려가는 코드
  // const clickForScroll = () => {
  //   document.querySelector('.section2').scrollIntoView({ behavior: 'smooth' });
  // };

  // // 햄버거 버튼을 누르면 x로 바뀌는 코드
  // const [toggleActive, setToggleActive] = useState(false);
  // const [showcaseActive, setShowcaseActive] = useState(false);

  // const handleToggleClick = () => {
  //   setToggleActive(!toggleActive);
  //   setShowcaseActive(!showcaseActive);
  // };

  useEffect(() => {
    $(".clickForScroll").click(function () {
      $('html, body').animate({
        scrollTop: $(".section2").offset().top
      }, 0);
    });

    $(document).ready(function () {
      $(".toggle").click(function () {
        $(".toggle").toggleClass("active");
        $(".showcase").toggleClass("active");
      });
    });


    const scrollers = $(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.each(function () {
        $(this).attr("data-animated", true);

        const scrollerInner = $(this).find(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children());

        scrollerContent.forEach((item) => {
          const duplicatedItem = $(item).clone(true);
          duplicatedItem.attr("aria-hidden", true);
          scrollerInner.append(duplicatedItem);
        });
      });
    }
  }, [])

  const { isLogin, login, logout } = useContext(LoginContext);

  return (
    // isLogin : 로그인 여부 - Y(true), N(false)
    <>
      <Helmet>
        <title>LiveDom</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
        <link rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css' />
        <link rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
      </Helmet>

      <div className='Index'>
        <div className="total_box">
          <div className="total_box_inner">
            <section className="showcase">
              <div className="headerCon">
                <Link to="/liveBoard">
                  <img src="/img/loginWhite.png" style={{ marginTop: '10px', height: '50px', objectFit: 'cover' }} />
                </Link>
                <div className='toggle'></div>
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
                {/* <LoginContextConsumer /> */}
                <h2>Making live shows</h2>
                <h3>more accessible than ever before</h3>
                <p>
                  LiveDom에 오신 것을 환영합니다. LiveDom은 클럽 대관, 공연 예약, 공연 팀 모집의 세 가지 주요 서비스를 제공하는 공간입니다.
                  좋아하는 아티스트의 공연을 예약하고, 나만의 공연을 계획하며, 같은 꿈을 꾸는 아티스트들과 팀을 이루는 음악적 여정을 LiveDom에서 시작해보세요. <br />
                  LiveDom에서는 여러분이 공연의 주인공이 됩니다. 여러분의 라이브를 만나보세요!
                </p>
                <Link to="/liveBoard">메인화면</Link>
              </div>
              <ul className="social_">
                <Link to="https://www.facebook.com/" target="_blank">
                  <i className="icon ion-social-facebook"></i>
                </Link>
                <Link to="https://www.twitter.com/" target="_blank">
                  <i className="icon ion-social-twitter"></i>
                </Link>
                <Link to="https://www.snapchat.com/" target="_blank">
                  <i className="icon ion-social-snapchat"></i>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <i className="icon ion-social-instagram"></i>
                </Link>
              </ul>
            </section>
            <div className="clickForScroll">
              {/* <i className="fi fi-rr-angle-down"></i> */}
              <h1 >↓</h1>
            </div>
            <div className="menu_">
              <form action="/logout" method="POST" id="logoutForm">
                {/* <input type="hidden" th: name="${_csrf.parameterName}" th: value="${_csrf.token}" /> */}
                <input type="hidden" />
              </form>
              <ul>
                <li><Link to="/frList"><i className="fi fi-rr-calendar-clock"></i>   클럽대관</Link></li>
                <br />
                <li><Link to="/liveBoard"><i className="fi fi-rs-music-alt"></i>   공연보기</Link></li>
                <br />
                <li><Link to="/teamList"><i className="fi fi-rs-chart-tree"></i>   공연팀 모집</Link></li>
                <br />
                {/* <th: block sec: authorize="isAnonymous()"> */}
                <li><Link href="/join"><i className="fi fi-rr-user-add"></i>   회원가입</Link></li>
                <br />
                {
                  !isLogin
                    // 비로그인 시
                    ?
                    <li><Link to="/login"><i className="fi fi-rr-sign-in-alt"></i>   로그인</Link></li>
                    :
                    // 로그인 시
                    <>
                      <li><Link to="/myPage"><i className="fi fi-rr-sign-in-alt"></i>   마이페이지</Link></li>
                      <br/>
                      <li><Link  onClick={ () => logout() }><i className="fi fi-rr-user-add"></i>   로그아웃</Link></li>
                    </>
                }
                {/* </th: block> */}
                {/* <th: block sec: authorize="isAuthenticated()"> */}
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
                    <Link to="/frList">
                      <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
                    </Link>
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
                <h1>당신의 음악, Live Dom에서.</h1>
                <Link to="/liveBoard">
                  <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
                </Link>
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
                    <h1>지금 공연 팀 모집을 시작해보세요.</h1>
                    <Link to="/teamList">
                      <h1 style={{ textDecoration: 'underline', fontSize: '3rem' }}>자세히 보기</h1>
                    </Link>
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
      </div>
    </>
  )
}

export default Index