import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
const LiveBoard = () => {
  return (
            <Routes>
                <Route path='/liveBoard' element={ <LiveBoardList/> }/>
            </Routes>
  )
}

export default LiveBoard