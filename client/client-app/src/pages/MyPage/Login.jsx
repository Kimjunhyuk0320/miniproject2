import React from 'react'
import LoginContainer from '../../containers/MyPage/LoginContainer';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './css/Login.css';

const Login = () => {
    return (
        <>
            <Header />
            <LoginContainer />
            <Footer />
        </>
    )
}

export default Login