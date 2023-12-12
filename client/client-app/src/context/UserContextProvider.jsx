import React, { createContext, useState } from 'react'
import App from '../App';
import UserContext from './UserContext'


const UserContextProvider = ({ children }) => {


    const [isLogin, setIsLogin] = useState(false)

    const [jwtToken, setJwtToken] = useState('')

    const [parsedToken, setParsedToken] = useState({})

    const logout = () => {
        setIsLogin(false)
        setJwtToken('')
        setParsedToken('')
    }
    const login = (jwt, parsedJwt) => {
        setIsLogin(true)
        setJwtToken(jwt)
        setParsedToken(parsedJwt)
    }

    // if(parsedToken.payload.users.auth == 'ROLE_USER')

    const jwtSets = {
        isLogin,
        setIsLogin,
        jwtToken,
        setJwtToken,
        parsedToken,
        setParsedToken,
        logout,
        login,
    }

    return (
        <UserContext.Provider value={{jwtSets}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider