import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


const MyPage = () => {
    return (
        <>
            <Helmet>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css' />
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
            </Helmet>
            <div id="mypage-container">
                <div className="body_box">
                    {/* 프로필 이미지 : 로그인에 따른 프로필 사진이 여기에 와야 한다. */}
                    <img src="/img/defaultProfile.png" alt="프로필사진" id="profile"
                        style={{ width: '150px', height: '150px', borderRadius: '100%', boxShadow: '0px 0px 15px gray', objectFit: 'cover' }}></img>
                </div>

                <h1>kyoCha_nnnnnnn</h1>
                <p>구교찬</p>

                <section className="auth_main_box">
                    <div className="wrap- wrap---1">
                        <Link to="/MyInfo">
                            <div className="container_ container--1 containerImg1">
                                <i className="fi fi-rr-settings"></i>
                                <span>내 정보 보기</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 유저일 떄 */}
                    <div className="wrap- wrap---2">
                        <Link to="/TicketPurchaseList">
                            <div className="container_ container--2 containerImg2">
                                <i className="fi fi-rr-users-alt"></i>
                                <span>티켓 구매 내역</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 클럽일 때 */}
                    <div className="wrap- wrap---2">
                        <Link to="/mypage/rrList">
                            <div className="container_ container--2 containerImg2">
                                <i className="fi fi-rr-users"></i>
                                <span>대관 요청 내역</span>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---3">
                        <Link to="/TicketSalesList">
                            <div className="container_ container--3 containerImg3">
                                <i className="fi fi-rr-list-check"></i>
                                <span>티켓 판매 현황</span>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---4">
                        <Link to="/TicketPurchaseList">
                            <div className="container_ container--4 containerImg4">
                                <i className="fi fi-rr-users-alt"></i>
                                <span>티켓 구매 내역</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 밴드일 때 */}
                    <div className="wrap- wrap---2">
                        <Link to="/TicketPurchaseList">
                            <div className="container_ container--2 containerImg2">
                                <div>
                                    <i className="fi fi-rr-users-alt"></i>
                                </div>
                                <div>
                                    <span>티켓 구매 내역</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---3">
                        <Link to="/TicketSalesList">
                            <div className="container_ container--3 containerImg3">
                                <i className="fi fi-rr-list-check"></i>
                                <span>티켓 판매 내역</span>
                            </div>
                        </Link>
                    </div>

                    <div className="wrap- wrap---4">
                        <Link to="/mypage/tllList">
                            <div className="container_ container--4 containerImg4">
                                <i className="fi fi-rr-user-add"></i>
                                <span>팀 모집 현황</span>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---5">
                        <Link to="/mypage/tlmList">
                            <div className="container_ container--5 containerImg5">
                                <i className="fi fi-rr-check"></i>
                                <span>내가 신청한 참가 내역</span>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---6">
                        <Link to="/mypage/clList">
                            <div className="container_ container--6 containerImg6">
                                <i className="fi fi-rr-handshake"></i>
                                <span>성사된 공연 목록</span>
                            </div>
                        </Link>
                    </div>
                    <div className="wrap- wrap---7">
                        <Link to="/mypage/rreqList">
                            <div className="container_ container--7 containerImg7">
                                <i className="fi fi-rr-users"></i>
                                <span>예약 신청한 대관 내역</span>
                            </div>
                        </Link>
                    </div>
                </section>
            </div >
        </>
    )
}

export default MyPage