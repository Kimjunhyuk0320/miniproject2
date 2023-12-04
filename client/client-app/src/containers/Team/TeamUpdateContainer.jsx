import React, { useEffect, useState } from 'react'
import TeamUpdate from '../../components/Team/TeamUpdate'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'

const TeamUpdateContainer = () => {
  const {teamNo} = useParams()
  const [title,setTitle] = useState('')
  const [writer,setWriter] = useState('')
  const [username,setUsername] = useState('')
  const [content,setContent] = useState('')
  const [location,setLocation] = useState('')
  const [address,setAddress] = useState('')
  const [liveDate,setLiveDate] = useState('')
  const [liveStTime,setLiveStTime] = useState('')
  const [liveEndTime,setLiveEndTime] = useState('')
  const [price,setPrice] = useState('')
  const [capacity,setCapacity] = useState('')
  const [account1,setAccount1] = useState('')
  const [account2,setAccount2] = useState('')

  const navi = useNavigate()

  const sets = {
    setTitle,
    setWriter,
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

  const getUpTeam = async (teamNo)=>{

    const response = await teamApi.teamRead(teamNo)
    const data = await response.data
    setTitle(data.title)
    setWriter(data.writer)
    setContent(data.content)
    setLocation(data.location)
    setAddress(data.address)
    setLiveDate(data.liveDate)
    setLiveStTime(data.liveStTime)
    setLiveEndTime(data.liveEndTime)
    setPrice(data.price)
    setCapacity(data.capacity)
    setAccount1(data.account.split('/')[0])
    setAccount2(data.account.split('/')[1])

    console.log(data)
  }

  const team = {
    title,
    writer,
    content,
    location,
    address,
    liveDate,
    liveStTime,
    liveEndTime,
    price,
    capacity,
    account1,
    account2,
    teamNo
  }

  const updateHandler = async (team) =>{

    console.log(team)
    const response = await teamApi.teamUpdate(team)
    const data = await response.data
    if(data!=null){
      navi(`/team/${teamNo}`)
    }else{
      navi(`/team/update/${teamNo}`)
    }
  }
  
  const updateHandler2 = ()=>{
    updateHandler(team);
  }


  useEffect(()=>{
    console.log(teamNo)
    getUpTeam(teamNo)
  },[teamNo])

  return (
    <>
    <TeamUpdate sets={sets} updateHandler2={updateHandler2}></TeamUpdate>
    </>
  )
}

export default TeamUpdateContainer