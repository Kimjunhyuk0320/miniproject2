import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'
import * as brApi from '../../apis/facilityRental/booking'
import FacilityRentalRead from '../../components/facilityRental/FacilityRentalRead'
import { LoginContext } from '../../contexts/LoginContextProvider'

const FacilityRentalReadContainer = ({ frNo }) => {
  const { userInfo } = useContext(LoginContext);
  const [fr, setFr] = useState({})
  const navi = useNavigate()
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');


  const reservation = {
    frNo,
    username,
    phone
  }

  const getFr = async () => {
    const response = await frApi.frRead(frNo)
    const data = await response.data
    // console.log(data)
    setFr(data)
  }
  const resvationHandler = async () => {
    if (!window.confirm(`정말로 대관을 신청하시겠습니까? `)) return
    const response = await brApi.insert(reservation)
    const data = await response.data

    if (data != null) {
      navi(`/frList`)
    } else {
      navi(`/fr/${frNo}`)
    }

  }

  const delHandler = async () => {
    if (fr.confirmed == 1) {
      window.alert(`예약이 확정된 게시글은 삭제가 불가능합니다!`)
      return
    }
    const response = await frApi.frDelete(frNo)
    const data = await response.data

    if (data != null) {
      navi(`/frList`)
    } else {
      navi(`/fr/${frNo}`)
    }
  }
  useEffect(() => {
    getFr()
    if (userInfo && userInfo.username) {
      setUsername(userInfo.username);
      setPhone(userInfo.phone);
    }
  }, [frNo, userInfo])

  return (
    <>
      <FacilityRentalRead fr={fr} delHandler={delHandler} resvationHandler={resvationHandler}></FacilityRentalRead>
    </>
  )
}

export default FacilityRentalReadContainer