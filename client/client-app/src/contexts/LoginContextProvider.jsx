import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userApi from '../apis/users/userApi';
import * as userAuth from '../apis/users/userAuth';

export const LoginContext = React.createContext();
LoginContext.displayName = 'LoginContextName'

/**
 * 로그인
 * - 로그인 체크
 * - 로그인 체크
 * - 로그아웃
 * 
 * - 로그인 세팅
 * - 로그아웃 세팅
 */
const LoginContextProvider = ({ children }) => {

    /*
        상태
        - 로그인 여부
        - 유저 정보
        - 권한 정보
        - 아아디 저장
    */

    // 로그인 여부
    const [isLogin, setLogin] = useState(false);

    // 유저 정보
    const [userInfo, setUserInfo] = useState({});

    // 권한 정보
    const [roles, setRoles] = useState({ isUser: false, isBand: false, isClub: false });

    // 아이디 저장
    const [rememberId, setRememberId] = useState();

    // 자동 로그인
    const [rememberMe, setRememberMe] = useState();

    // 페이지 이동
    const navigate = useNavigate();

    /*
        로그인 체크
    */
    const loginCheck = async (isAuthPage = false) => {
        // 쿠키에서 jwt토큰 가져오기
        const accessToken = Cookies.get("accessToken")
        // accessToken(jwt)이 없음
        console.log(`accessToken : ${accessToken}`);

        // 사용자 정보 요청
        let response
        let data

        // JWT (accessToken) 이 없음 - 💍in🍪 ❌
        // JWT❌ AND 인증필요❌
        if (!accessToken) {
            console.log(`쿠키에 accessToken(jwt)이 없음`)
            logoutSetting()
            return
        }

        //  JWT❌ AND 인증필요⭕
        if (!accessToken && isAuthPage) {
            navigate("/login")
        }

        // JWT (accessToken) 이 있음 - 💍in🍪 ⭕
        console.log(`쿠키에 JWT(accessToken) 이 저장되어 있음`);
        userApi.defaults.headers.common.Authorization = `Bearer ${accessToken}`


        try {
            response = await userAuth.userInfo()
        } catch (error) {
            console.log(`error :  + ${error}`)
            console.log(`status : ${response.status}`)
            return;
        }
        data = response.data
        console.log(`data : ${data}`)

        // 인증 실패
        if (data == 'UNAUTHRIZED' || response.status == 401) {
            console.error(`accessToken (jwt) 이 만료되었거나 인증에 실패하였습니다.`);
            return;
        }

        // 인증 성공
        console.log(`accessToken (jwt) 토큰으로 사용자 인증정보`)

        // 로그인 세팅
        loginSetting(data, accessToken)
    }

    // 로그인
    const login = async (username, password, rememberId, rememberMe) => {

        console.log(`username : ${username}`)
        console.log(`password : ${password}`)
        console.log(`rememberId : ${rememberId}`)
        console.log(`rememberMe : ${rememberMe}`)

        const response = await userAuth.login(username, password);

        // 아이디 저장
        if (rememberId) Cookies.set("rememberId", username)
        else Cookies.remove("rememberId")

        // 자동 로그인
        if (rememberMe) Cookies.set("rememberMe", username)
        else Cookies.remove("rememberMe")

        try {
            const response = await userAuth.login(username, password)
            const data = response.data;
            const status = response.status;
            const headers = response.headers;
            const authorization = headers.authorization;
            const accessToken = authorization.replace("Bearer ", "");

            console.log(`data : ${data}`);
            console.log(`status : ${status}`);
            console.log(`headers : ${headers}`);
            console.log(`jwt : ${accessToken}`);

            // 로그인 성공
            if (status === 200) {
                // 로그인 체크
                Cookies.set("accessToken", accessToken);

                loginCheck();

                // alert("로그인 성공");

                // 라이브보드 페이지로 이동
                navigate("/liveBoard")
            }

        } catch (error) {
            // 로그인 실패
            alert("로그인을 실패했습니다.")
        }
    }


    // 로그아웃
    const logout = () => {
        // const ckeck = window.confirm("로그아웃하시겠습니까?")

        // if (ckeck) {
        // 로그아웃 세팅
        logoutSetting();
        // alert('로그아웃 세팅 완료!!')

        // 라이브보드 페이지로 이동
        navigate('/liveBoard')
        // :( 이게 되지 않는 이유???
        // }
    }

    // - 로그인 세팅
    // userData, accessToken (jwt)
    const loginSetting = (userData, accessToken) => {
        const { username, authList, profileNo, phone } = userData
        const roleList = authList.map((auth) => auth.auth)

        console.log(`username : ${username}`)
        console.log(`authList : ${authList}`)
        console.log(`roleList : ${roleList}`)
        console.log(`profileNo : ${profileNo}`)

        // axios 객체의 header(Authorization : `Bearer ${accessToken}`)
        userApi.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // 쿠키에 accessToken(jwt) 저장
        if(Cookies.get('rememberMe') != null){
            Cookies.set("accessToken", accessToken, {expires:7});
            // Cookies.set("rememberMe", rememberMe, {expires:7});
            // window.alert("rememberMe가 null이 아닐 때 7일 설정.")
        }else{
            Cookies.set("accessToken", accessToken);
            // window.alert("rememberMe가 null일 때 설정하지 않음.")
        }

        // 로그인 여부 : true
        setLogin(true)

        // 유저정보 세팅
        const updatedUserInfo = { username, roleList, profileNo, phone }
        setUserInfo(updatedUserInfo)

        // 권한 정보 세팅
        const updatedRoles = { isUser: false, isBand: false, isClub: false }

        roleList.forEach((role) => {
            // alert("권한 정보 세팅에서 : " + role)
            switch (role) {
                case 'ROLE_USER':
                    updatedRoles.isUser = true;
                    break;
                case 'ROLE_BAND':
                    updatedRoles.isBand = true;
                    break;
                case 'ROLE_CLUB':
                    updatedRoles.isClub = true;
                    break;
                default:
                    break;
            }
        });

        setRoles(updatedRoles)
    }

    // 로그아웃 세팅
    const logoutSetting = () => {
        // axios 객체의 header 초기화
        userApi.defaults.headers.common.Authorization = undefined;

        // 쿠키에 accessToken(jwt) 초기화
        Cookies.remove("accessToken")
        Cookies.remove("rememberMe")

        // 로그인 여부 : false
        setLogin(false)

        // 유저정보 초기화
        setUserInfo(null)

        // 권한 정보 초기화
        setRoles({ isUser: false, isBand: false, isClub: false })
    }

    useEffect(() => {
        // 로그인 체크
        loginCheck()
    }, [])

    return (
        <div>
            <LoginContext.Provider value={{ isLogin, userInfo, roles, login, logout, loginCheck }}>
                {children}
            </LoginContext.Provider>
        </div>
    )
}

export default LoginContextProvider