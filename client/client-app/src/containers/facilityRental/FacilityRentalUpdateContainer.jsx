import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'
import FacilityRentalUpdate from '../../components/facilityRental/FacilityRentalUpdate';
import UserContext from '../../context/UserContext';

const FacilityRentalUpdateContainer = ({ frNo }) => {

  const { jwtSets } = useContext(UserContext)


  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState('')
  const [liveDate, setLiveDate] = useState('')
  const [account1, setAccount1] = useState('')
  const [account2, setAccount2] = useState('')
  const [file, setFile] = useState([])

  const navi = useNavigate();

  const updateHandler = async () => {


    function check(regExp, element, msg) {
      if (regExp.test(element)) {
        return true
      }
      alert(msg)
      return false
    }

    let msg = ''

    let titleCheck = /^.{3,45}$/
    msg = '제목은 3 ~ 45 글자 사이로 작성해주십시오.'
    if (!check(titleCheck, title, msg)) return


    let addressCheck = /^.{5,20}$/
    msg = '주소는 5 ~ 20 글자 사이로 작성해주십시오.'
    if (!check(addressCheck, address, msg)) return

    let account2Check = /^.{10,20}$/
    msg = '계좌번호는 알맞은 형태로 작성해주십시오.'
    if (!check(account2Check, account2, msg)) return

    let priceCheck = /^\d{1,8}$/
    msg = '가격은 8자릿수 안의 정수로 입력해주십시오'
    if (!check(priceCheck, price, msg)) return

    if (!window.confirm(`수정사항을 등록하시겠습니까?`)) return
    const response = await frApi.frUpdate(sets, jwtSets.jwtToken)
    const data = await response.data
    if (data != null) {
      navi(`/fr/${frNo}`)
    } else {
      navi(`/fr/update/${frNo}`)
    }
  }

  const sets = {
    setTitle,
    setContent,
    setLocation,
    setAddress,
    setLiveDate,
    setPrice,
    setAccount1,
    setAccount2,
    setFile,
    title,
    content,
    location,
    address,
    liveDate,
    price,
    account1,
    account2,
    updateHandler,
    file,
    frNo
  }

  const setUpFr = async () => {
    const response = await frApi.frRead(frNo, jwtSets.jwtToken)
    const data = await response.data
    setTitle(data.title)
    setContent(data.content)
    setLocation(data.location)
    setAddress(data.address)
    setLiveDate(data.liveDate)
    setPrice(data.price)
    setAccount1(data.account.split('/')[0])
    setAccount2(data.account.split('/')[1])
    if (data.confirmed == 1) {
      window.alert(`예약이 확정된 게시글은 수정이 불가능합니다!`)
      navi(`/fr/${frNo}`)
    }
  }



  useEffect(() => {

    setUpFr()
  }, [frNo])

  return (
    <div>
      <FacilityRentalUpdate sets={sets}></FacilityRentalUpdate>
    </div>
  )
}

export default FacilityRentalUpdateContainer