import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './css/ActiveFooter.css';
import { LoginContext } from '../contexts/LoginContextProvider';

const ActiveFooter = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);

  const { isLogin, logout } = useContext(LoginContext);

  useEffect(() => {
    const handleIndicator = (el) => {
      const indicator = document.querySelector('.activeNav-indicator');
      const items = document.querySelectorAll('.activeNav-item');

      items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });

      const direction = getPageDirection();

      if (direction === 'left-to-right') {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.transition = 'left 0.4s, width 0.4s';
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.right = '';
      } else {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.transition = 'right 0.4s, width 0.4s';
        indicator.style.right = `${document.querySelector('.activeNav').offsetWidth - el.offsetLeft - el.offsetWidth}px`;
        indicator.style.left = '';
      }

      indicator.style.backgroundColor = el.getAttribute('active-color');

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');

      localStorage.setItem('activeNavItem', el.getAttribute('data-index'));
    };

    const getPageDirection = () => {
      return "left-to-right";
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerHeight = $('#footer').innerHeight();

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const footerScrollY = docHeight - footerHeight;

      if (winHeight + scrollY >= footerScrollY) {
        $('.activeFooterContainer').stop().fadeOut(1000).css({
          'bottom': '-100px',
        });
      }

      if (winHeight + scrollY < footerScrollY - 100) {
        $('.activeFooterContainer').stop().fadeIn(1000).css({
          'position': 'fixed',
          'bottom': '50px',
        });
      }
    };

    const handleMouseWheel = (e) => {
      const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
      setScrollUp(e.deltaY < 0);
      setScrollDown(e.deltaY > 0);

      // console.log('scrollUp : ' + scrollUp);
      // console.log('scrollDown : ' + scrollDown);

      if (scrollUp) {
        // Handle scroll up
      }

      if (scrollDown) {
        // Handle scroll down
      }

      // console.log(direction);
    };

    const items = document.querySelectorAll('.activeNav-item');
    items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        handleIndicator(e.target);
      });

      if (item.getAttribute('href') === window.location.pathname) {
        handleIndicator(item);
      }
    });

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousewheel', handleMouseWheel);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousewheel', handleMouseWheel);
    };
  }, [scrollUp, scrollDown]);

  return (
    <>
      <div className="activeFooterContainer">
        <nav className="activeNav">
          <Link to="/frList" className="activeNav-item" active-color="orange" data-index="2">대관하기</Link>
          <Link to="/liveBoard" className="activeNav-item" active-color="green" data-index="1">공연보기</Link>
          <Link to="/teamList" className="activeNav-item" active-color="red" data-index="3">팀모집하기</Link>
          <Link to="/" className="activeNav-item" active-color="blue" data-index="0">LiveDom</Link>
          {/* 로그인 되었을 때 */}
          {
            !isLogin
              ?
              <>
                <Link to="/login" className="activeNav-item" active-color="rebeccapurple" data-index="5">로그인</Link>
                <span className="activeNav-indicator"></span>
              </>
              :
              // <Link to="#" onClick={() => logout()} className="activeNav-item" active-color="rebeccapurple" data-index="5">로그아웃</Link>

              <button className='logoutbtn' onClick={() => logout()}>로그아웃</button>
          }
          <span className="activeNav-indicator"></span>
        </nav>
      </div>
    </>
  );
};

export default ActiveFooter;
