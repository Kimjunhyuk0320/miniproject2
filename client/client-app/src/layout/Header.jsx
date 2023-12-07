import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
import $ from 'jquery';

const Header = () => {

    useEffect(() => {


    let auth = $('#auth').val()
    // 상단 메뉴 관련
    $(' .header > .header-inner > .top-menu-bar > ul > li').mouseenter(function(){
        $(this).addClass('active');
        $(this).find('> a').addClass('active');
    });

    $('.header > .header-inner > .top-menu-bar > ul > li').mouseleave(function(){
        $(this).removeClass('active');
        $(this).find('> a').removeClass('active');
    });

    // 상단 2차 메뉴 배경
    if(auth == 'ROLE_CLUB' || auth == 'ROLE_BAND'){
        $('.header > .header-inner > .top-menu-bar > ul > .menu-1').mouseenter(function(){
            $('.sub-menu-bg').css('height','140px');
        });
    }else{
        $('.header > .header-inner > .top-menu-bar > ul > .menu-1').mouseenter(function(){
            $('.sub-menu-bg').css('height','');
        });
    }
    $('.header > .header-inner > .top-menu-bar > ul > .menu-1').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });
    if(auth == 'ROLE_CLUB' || auth == 'ROLE_BAND'){
        $('.header > .header-inner > .top-menu-bar > ul > .menu-2').mouseenter(function(){
            $('.sub-menu-bg').css('height','180px');
        });
    }else{
        $('.header > .header-inner > .top-menu-bar > ul > .menu-2').mouseenter(function(){
            $('.sub-menu-bg').css('height','');
        });
    }
    $('.header > .header-inner > .top-menu-bar > ul > .menu-2').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });

    if(auth == 'ROLE_BAND'){
        $('.header > .header-inner > .top-menu-bar > ul > .menu-3').mouseenter(function(){
            $('.sub-menu-bg').css('height','220px');
        });
    }else{
        $('.header > .header-inner > .top-menu-bar > ul > .menu-3').mouseenter(function(){
            $('.sub-menu-bg').css('height','');
        });
    }
    $('.header > .header-inner > .top-menu-bar > ul > .menu-3').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });
    if(auth == 'ROLE_CLUB' || auth == 'ROLE_BAND' || auth == 'ROLE_USER'){
        $('.header > .header-inner > .top-menu-bar > ul > .menu-4').mouseenter(function(){
            $('.sub-menu-bg').css('height','120px');
        });
    }else{
        $('.header > .header-inner > .top-menu-bar > ul > .menu-4').mouseenter(function(){
            $('.sub-menu-bg').css('height','');
        });
    }
    $('.header > .header-inner > .top-menu-bar > ul > .menu-4').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });

    $('.header > .header-inner > .top-menu-bar > ul > .menu-5').mouseenter(function(){
        $('.sub-menu-bg').css('height','110px');
    });
    $('.header > .header-inner > .top-menu-bar > ul > .menu-5').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });
    $('.header > .header-inner > .top-menu-bar > ul > .menu-6').mouseenter(function(){
        $('.sub-menu-bg').css('height','240px');
    });
    $('.header > .header-inner > .top-menu-bar > ul > .menu-6').mouseleave(function(){
        $('.sub-menu-bg').css('height','');
    });

    }, [])

    return (
        <div className='header'>
            <div className="header-inner">
                <div className="logo img_box">
                    <Link to="/">
                        <img src="/img/logo_header.png" style={{ width: '280px', height: '100px', objectFit: 'cover', marginBottom: '5px' }} />
                    </Link>
                </div>

                <nav className="top-menu-bar header-row line-height-0">
                    <ul className="header-row">
                        <li className="cells menu-6">
                            <Link to="/frList">클럽 대관 서비스</Link>
                            <ul>
                                {/* 권한이 클럽일 때 */}
                                <li><Link to="/frList">클럽 대관 목록</Link></li>
                                <li className="cell">
                                    <ul>
                                        <li><Link to="/fr/insert">대관 게시글 작성하기</Link></li>
                                        <li><Link to="/mypage/rrList">받은 대관 신청</Link></li>
                                    </ul>
                                </li>
                                {/* 권한이 밴드일 때 */}
                                <li><Link to="/frList">대관 신청 목록</Link></li>
                                <li className="cell">
                                    <ul>
                                        <li><Link to="/mypage/rreqList">대관 신청 내역</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="sub-menu-width sub-menu-width-1"></div>
                        </li>
                        <li className="cells menu-6">
                            <Link to="/liveBoard">공연</Link>
                            <ul className="header-row">
                                {/* 권한이 밴드일 때 */}
                                <li><Link to="/liveBoard">공연 목록</Link></li>
                                <li className="cell">
                                    <ul>
                                        <li><Link to="/liveBoard/insert">공연 등록하기</Link></li>
                                        <li><Link to="/TicketSalesList">판매한 티켓 내역</Link></li>
                                        <li><Link to="/TicketPurchaseList">예매한 티켓 내역</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="sub-menu-width sub-menu-width-2"></div>
                        </li>
                        <li className="cells menu-6">
                            <Link to="/teamList">공연팀 모집</Link>
                            <ul>
                                {/* 권한이 밴드일 떄 */}
                                <li><Link to="/teamList">공연팀 모집 목록</Link></li>
                                <li className="cell">
                                    <ul>
                                        <li><Link to="/team/insert">모집글 작성하기</Link></li>
                                        <li><Link to="/mypage/tlmList">참가신청 내역</Link></li>
                                        <li><Link to="/mypage/tllList">받은 참가신청</Link></li>
                                        <li><Link to="/mypage/clList">성사된 공연</Link></li>
                                    </ul>
                                </li>

                            </ul>
                            <div className="sub-menu-width sub-menu-width-3"></div>
                        </li>
                    </ul>
                    <ul className="header-row cells-right">
                        {/* 로그인 되었을 때 */}
                        <li className="cells menu-5">
                            <Link to="/myPage">마이페이지</Link>
                            <ul>
                                <li><Link to="/myInfo">내 정보 보기</Link></li>
                                <li><Link to="/update">내 정보 수정하기</Link></li>
                            </ul>
                            <div className="sub-menu-width sub-menu-width-4"></div>
                        </li>
                        {/* 비회원일 때 */}
                        <li className="cells menu-5">
                            <Link to="/login">로그인</Link>
                            <ul>
                                <li><Link to="/login">로그인</Link></li>
                                <li><Link to="/join">회원가입</Link></li>
                            </ul>
                            <div className="sub-menu-width sub-menu-width-5"></div>
                        </li>
                        <li className="cells">
                            <Link to="/join">회원가입</Link>
                            <div className="sub-menu-width sub-menu-width-5"></div>
                        </li>
                        {/* 로그인 되었을 때 */}
                        <li className="cells">
                            {/* <a href="#" onclick="logOut()">로그아웃</a> */}
                            <Link to="#">로그아웃</Link>
                            <div className="sub-menu-width sub-menu-width-5"></div>
                        </li>
                        <li className="cells menu-">
                            <Link to="/TotalSearch">통합 겸색</Link>
                            <div className="sub-menu-width sub-menu-width-2"></div>
                        </li>
                    </ul>
                    <div className="sub-menu-bg"></div>
                </nav>
                <div class="search-box">
                    {/* 프로필 사진이 있을 때 */}
                    {/* <a href="/myPage/myInfo">
                        <img src="/file/img/${#authentication.principal.users.profileNo}" alt="프로필사진" id="profile" style={{ width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0px 0px 8px gray' }} />
                    </a> */}
                    {/* 프로필 사진이 없을 때 */}
                    <a href="/myInfo">
                        <img src="/img/defaultProfile.png" alt="프로필사진" id="profile" style={{ width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0px 0px 8px gray' }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header