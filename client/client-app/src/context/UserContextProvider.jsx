import React, { createContext, useEffect, useState } from 'react'
import App from '../App';
import UserContext from './UserContext'
import * as userApi from '../apis/users/userApi'


const UserContextProvider = ({ children }) => {


    const [isLogin, setIsLogin] = useState(false)

    const [jwtToken, setJwtToken] = useState('')

    const [parsedToken, setParsedToken] = useState({})

    const [isUSER, setIsUSER] = useState(false)
    const [isCLUB, setIsCLUB] = useState(false)
    const [isBAND, setIsBAND] = useState(false)

    const logout = () => {
        setIsLogin(false)
        setJwtToken('')
        setParsedToken('')
        setIsUSER(false)
        setIsCLUB(false)
        setIsBAND(false)
        //refreshToken쿠키날리기
        userApi.delCookieValue(`refreshToken`)
    }
    const login = (jwt, parsedJwt) => {
        setIsLogin(true)
        setJwtToken(jwt)
        setParsedToken(parsedJwt)
        console.log(parsedJwt)
        if (parsedJwt.auth == 'ROLE_USER') setIsUSER(true)
        if (parsedJwt.auth == 'ROLE_CLUB') setIsCLUB(true)
        if (parsedJwt.auth == 'ROLE_BAND') setIsBAND(true)
    }

    const autoLogin = async () => {
        const response = await userApi.jwtInfo(userApi.getCookieValue(`refreshToken`))
        const data = await response.data
        setJwtToken(userApi.getCookieValue(`refreshToken`))
        setParsedToken(data)
        setIsLogin(true)
        if (data.auth == 'ROLE_USER') setIsUSER(true)
        if (data.auth == 'ROLE_CLUB') setIsCLUB(true)
        if (data.auth == 'ROLE_BAND') setIsBAND(true)
    }

    useEffect(() => {
        if (userApi.getCookieValue(`refreshToken`) != null) autoLogin()
    }, [])

    // if(parsedToken.payload.users.auth == 'ROLE_USER')

    const jwtSets = {
        isLogin,
        setIsLogin,
        jwtToken,
        setJwtToken,
        parsedToken,
        setParsedToken,
        isUSER,
        isCLUB,
        isBAND,
        logout,
        login,
    }

    return (
        <UserContext.Provider value={{ jwtSets }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider