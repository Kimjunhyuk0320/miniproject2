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
                <div>MyPage가 들어올 부분입니다.</div>

                <div class="body_box">
                    {/* 프로필 이미지 : 로그인에 따른 프로필 사진이 여기에 와야 한다. */}
                    <img src="/img/defaultProfile.png" alt="프로필사진" id="profile"
                        style={{ width: '150px', height: '150px', borderRadius: '100%', boxShadow: '0px 0px 15px gray', objectFit: 'cover' }}></img>
                </div>

                <h1>홍박사님을 아세연</h1>
                <p>hkd7777</p>

                <section class="auth_main_box">
                    <div class="wrap- wrap---1">
                        <Link to="/MyInfo">
                            <div class="container_ container--1 containerImg1">
                                <i class="fi fi-rr-settings"></i>
                                <span>내 정보 보기</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 유저일 떄 */}
                    <div class="wrap- wrap---2">
                        <Link to="moveUser('/myPage/ticket_purchase_list')">
                            <div class="container_ container--2 containerImg2">
                                <i class="fi fi-rr-users-alt"></i>
                                <span>티켓 구매 내역</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 클럽일 때 */}
                    <div class="wrap- wrap---2">
                        <Link to="moveFr('/user/receivedList')">
                            <div class="container_ container--2 containerImg2">
                                <i class="fi fi-rr-users"></i>
                                <span>대관 요청 내역</span>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---3">
                        <Link to="moveUser('/myPage/ticket_sales_list')">
                            <div class="container_ container--3 containerImg3">
                                <i class="fi fi-rr-list-check"></i>
                                <span>티켓 판매 현황</span>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---4">
                        <Link to="moveUser('/myPage/ticket_purchase_list')">
                            <div class="container_ container--4 containerImg4">
                                <i class="fi fi-rr-users-alt"></i>
                                <span>티켓 구매 내역</span>
                            </div>
                        </Link>
                    </div>
                    {/* 권한이 밴드일 때 */}
                    <div class="wrap- wrap---2">
                        <Link to="moveUser('/myPage/ticket_purchase_list')">
                            <div class="container_ container--2 containerImg2">
                                <div>
                                    <i class="fi fi-rr-users-alt"></i>
                                </div>
                                <div>
                                    <span>티켓 구매 내역</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---3">
                        <Link to="moveUser('/myPage/ticket_sales_list')">
                            <div class="container_ container--3 containerImg3">
                                <i class="fi fi-rr-list-check"></i>
                                <span>티켓 판매 내역</span>
                            </div>
                        </Link>
                    </div>

                    <div class="wrap- wrap---4">
                        <Link to="moveTeam('/user/listByLeader')">
                            <div class="container_ container--4 containerImg4">
                                <i class="fi fi-rr-user-add"></i>
                                <span>팀 모집 현황</span>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---5">
                        <Link to="moveTeam('/user/listByMember')">
                            <div class="container_ container--5 containerImg5">
                                <i class="fi fi-rr-check"></i>
                                <span>내가 신청한 참가 내역</span>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---6">
                        <Link to="moveTeam('/user/listByConfirmedLive')">
                            <div class="container_ container--6 containerImg6">
                                <i class="fi fi-rr-handshake"></i>
                                <span>성사된 공연 목록</span>
                            </div>
                        </Link>
                    </div>
                    <div class="wrap- wrap---7">
                        <Link to="moveFr('/user/reqList')">
                            <div class="container_ container--7 containerImg7">
                                <i class="fi fi-rr-users"></i>
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