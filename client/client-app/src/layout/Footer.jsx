import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import './css/Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark" id="footer">
            <Helmet>
                {/* 페이스북, 트위터, ... 관련 아이콘입니다. */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
            </Helmet>
            <footer>
                <div className="containerFooter">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to="/facilityRental/list">클럽 대관</Link></li>
                                <li><Link to="/liveBoard">공연 보기</Link></li>
                                <li><Link to="/team">공연팀 모집</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                {/* 로그인 되었을 때 */}
                                <li><Link to="/myPage">마이페이지</Link></li>
                                {/* <form action="/logout" method="POST" id="logoutForm">
                                    <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}">
                                </form> */}
                                {/* <script>
                                    function logout(){
                                        let form = $(`#logoutForm`)
                                        form.submit()
                                    }
                                </script> */}
                                <li><Link to="#" onclick="logout()">로그아웃</Link></li>
                                {/* 비회원일 때 */}
                                <li><Link to="/login">로그인</Link></li>
                                <li><Link to="/join">회원가입</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>LiveDom</h3>
                            <p>
                                LiveDom에서 제공하는 모든 컨텐츠는 저작권법에 보호받는 저작물로서, 무단으로 복제, 배포하는 경우에는 저작권법에 의하여 처벌을 받을 수 있습니다.
                                <br />
                                All contents provided by LiveDom are works protected by copyright law and may be punished under copyright law if copied or distributed without permission.
                            </p>
                        </div>
                    </div>
                    <div className="col item social">
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
                    </div>
                    <p className="copyright">Copyright © LiveDom 2023 All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer