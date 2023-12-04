import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as teamApi from '../../apis/Team/TeamApi'
import TeamReg from '../../components/Team/TeamReg';

const TeamRegContainer = () => {

    const {teamNo} = useParams();

    const [title,setTitle] = useState('')
    const [bandName,setBandName] = useState('')
    const [content,setContent] = useState('')
    const phone = '01012345678'
    const username = 'gangjinsu'
    const navi = useNavigate()

    const regHandler = async ()=>{
        console.log(sets)
        const response = await teamApi.teamReg(sets)
        const data = await response.data

        if(data!=null){
            navi(`/`)
        }else{
            navi(`/team/${teamNo}`)
        }
    }

    const sets = {
        setTitle,
        setBandName,
        setContent,
        title,
        bandName,
        content,
        phone,
        username,
        regHandler,
        teamNo
    }

  return (
    <>
    <TeamReg sets={sets}></TeamReg>
    </>
  )
}

export default TeamRegContainer