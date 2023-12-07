import React, { useState } from 'react'
import TeamInsert from '../../components/Team/TeamInsert'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'

const TeamInsertContainer = () => {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const [location,setLocation] = useState('경기')
  const [address,setAddress] = useState('')
  const [liveDate,setLiveDate] = useState('')
  const [liveStTime,setLiveStTime] = useState('')
  const [liveEndTime,setLiveEndTime] = useState('')
  const [price,setPrice] = useState('')
  const [capacity,setCapacity] = useState('1')
  const [account1,setAccount1] = useState('신한은행')
  const [account2,setAccount2] = useState('')
  const username = 'gangjinsu'
  const writer = 'aster'

  const navi = useNavigate()

  const sets = {
    setTitle,
    setContent,
    setLocation,
    setAddress,
    setLiveDate,
    setLiveStTime,
    setLiveEndTime,
    setPrice,
    setCapacity,
    setAccount1,
    setAccount2,
    title,
    writer,
    username,
    content,
    location,
    address,
    liveDate,
    liveStTime,
    liveEndTime,
    price,
    capacity,
    account1,
    account2
  }


  const insertHandler = async () =>{

    console.log(sets)
    const response = await teamApi.teamInsert(sets)
    const data = await response.data
    if(data!=null){
      navi(`/team/${data}`)
    }else{
      navi(`/teamList`)
    }
  }
  


  return (
    <>
        <TeamInsert sets={sets} insertHandler={insertHandler}></TeamInsert>
    </>
  )
}

export default TeamInsertContainer