import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


const MyPage = ({ isLogin, sets, userInfo, roles }) => {
    return (
        <>
            <Helmet>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css' />
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
            </Helmet>
            <div id="mypage-container">
                <div className="body_box">
                    <div className="body_box">
                        {userInfo?.profileNo === 0 || sets.fileSource ? (
                            <img src={sets.fileSource ? sets.fileSource : "/img/defaultProfile.png"} alt="프로필사진" id="profile"
                                style={{ width: '150px', height: '150px', borderRadius: '100%', boxShadow: '0px 0px 15px gray', objectFit: 'cover' }} />
                        ) : (
                            <img src={`/file/img/${userInfo?.profileNo}`} alt="프로필사진"
                                style={{ width: '150px', height: '150px', borderRadius: '100%', boxShadow: '0px 0px 15px gray', objectFit: 'cover' }} />
                        )}
                    </div>
                </div>

                <h1>{userInfo?.username}</h1>
                <p>{userInfo?.name}</p>

                <section className="auth_main_box">
                    {
                        // "일반회원" 
                        isLogin && roles?.isUser === true ?
                            <>
                                <div className="wrap- wrap---1">
                                    <Link to="/MyInfo">
                                        <div className="container_ container--1 containerImg1">
                                            <i className="fi fi-rr-settings"></i>
                                            <span>내 정보 보기</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="wrap- wrap---2">
                                    <Link to="/TicketPurchaseList">
                                        <div className="container_ container--2 containerImg2">
                                            <i className="fi fi-rr-users-alt"></i>
                                            <span>티켓 구매 내역</span>
                                        </div>
                                    </Link>
                                </div>
                            </>
                            :
                            isLogin && roles?.isClub === true ?
                            // "클럽회원" 
                                <>
                                    <div className="wrap- wrap---1">
                                        <Link to="/MyInfo">
                                            <div className="container_ container--1 containerImg1">
                                                <i className="fi fi-rr-settings"></i>
                                                <span>내 정보 보기</span>
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
                                </>
                                :
                                // "밴드회원"
                                <>
                                    <div className="wrap- wrap---1">
                                        <Link to="/MyInfo">
                                            <div className="container_ container--1 containerImg1">
                                                <i className="fi fi-rr-settings"></i>
                                                <span>내 정보 보기</span>
                                            </div>
                                        </Link>
                                    </div>
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
                                </>
                    }

                    {/* 권한이 클럽일 때 */}
                    {/* 권한이 밴드일 때 */}

                </section>
            </div >
        </>
    )
}

export default MyPage