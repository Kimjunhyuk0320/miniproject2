import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import './css/ActiveFooter.css'

const ActiveFooter = () => {

    useEffect(() => {
        let indicator = document.querySelector('.activeNav-indicator');
        let items = document.querySelectorAll('.activeNav-item');

        function getPageDirection() {
            return "left-to-right";
        }

        function handleIndicator(el) {
            items.forEach(item => {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });

            const direction = getPageDirection();

            if (direction === 'left-to-right') {
                indicator.style.width = `${el.offsetWidth}px`;
                indicator.style.transition = 'left 0.4s, width 0.4s'; // Add transition for 'left'
                indicator.style.left = `${el.offsetLeft}px`;
                indicator.style.right = '';
            } else {
                // 'left' 대신 'right' 사용
                indicator.style.width = `${el.offsetWidth}px`;
                indicator.style.transition = 'right 0.4s, width 0.4s'; // Add transition for 'right'
                indicator.style.right =
                    `${document.querySelector('.activeNav').offsetWidth - el.offsetLeft - el.offsetWidth}px`;
                indicator.style.left = '';
            }

            indicator.style.backgroundColor = el.getAttribute('active-color');

            el.classList.add('is-active');
            el.style.color = el.getAttribute('active-color');

            localStorage.setItem('activeNavItem', el.getAttribute('data-index'));
        }

        items.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                handleIndicator(e.target)
            });

            if (item.getAttribute('href') === window.location.pathname) {
                handleIndicator(item);
            }
        });



        $(function () {
            // 스크롤 이벤트 등록
            window.addEventListener('scroll', (event) => {
                let scrollY = window.scrollY // 현재 세로방향 스크롤 위치
                let footerHeight = $('#footer').innerHeight()
                console.log('푸터의 높이' + footerHeight);
                console.log('현재 스크롤 위치 : ' + scrollY);

                // 스크롤 맨 아래 확인
                // 1. html 전체 높이
                let docHeight = document.documentElement.scrollHeight
                console.log(`docHeight : ${docHeight}`);

                // 2. window 의 높이
                let winHeight = window.innerHeight
                console.log(`winHeight : ${winHeight}`);

                // 현재 스클롤이 푸터 위치 까지 왔을 때
                // footerActive 를 fixed -> sticky
                let footerScrollY = docHeight - footerHeight
                console.log('footerScrollY : ' + footerScrollY);
                if (winHeight + scrollY >= footerScrollY) {

                    // 페이드 아웃
                    // 푸터에 붙이기
                    $('.activeFooterContainer').stop().fadeOut(1000).css({
                        // 'position' : 'relative',
                        'bottom': '-100px',
                    })

                }

                if ((winHeight + scrollY < footerScrollY - 100)) {
                    console.log('다시 액티브 띄우기');

                    $('.activeFooterContainer').stop().fadeIn(1000).css({
                        'position': 'fixed',
                        'bottom': '50px',
                    })
                }


                // if( winHeight + scrollY >= docHeight ) {
                //     alert('스크롤 마지막입니다.')
                // }

            })

            let scrollUp = 0
            let scrollDown = 0
            document.addEventListener("mousewheel", e => {
                const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
                scrollUp = e.deltaY < 0
                scrollDown = e.deltaY > 0
                console.log('scrollUp : ' + scrollUp);
                console.log('scrollDown : ' + scrollDown);

                if (scrollUp) {

                }

                if (scrollDown) {

                }

                console.log(direction);
            });
        })
    })

    return (
        <>
            <div className="activeFooterContainer">
                <nav className="activeNav">
                    <Link to="/facilityRental/list" class="activeNav-item" active-color="orange" data-index="2">대관하기</Link>
                    <Link to="/liveBoard" class="activeNav-item" active-color="green" data-index="1">공연보기</Link>
                    <Link to="/team" class="activeNav-item" active-color="red" data-index="3">팀모집하기</Link>
                    <Link to="/" class="activeNav-item" active-color="blue" data-index="0">LiveDom</Link>
                    {/* 로그인 되었을 때 */}
                    {/* <Link to="/myPage" class="activeNav-item" active-color="rebeccapurple" data-index="4">마이페이지</Link> */}
                    {/* 비로그인 상태일 때 */}
                    <Link to="/login" class="activeNav-item" active-color="rebeccapurple" data-index="5">로그인</Link>
                    <span className="activeNav-indicator"></span>
                    <span className="activeNav-indicator"></span>
                </nav>
            </div>
        </>
    )
}

export default ActiveFooter