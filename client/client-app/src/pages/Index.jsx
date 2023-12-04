import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <h3>메인 페이지</h3>
        <Link to="/liveBoard">공연</Link>
    </div>
  )
}

export default Index