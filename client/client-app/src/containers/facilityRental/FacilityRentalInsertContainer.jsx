import React, { useState } from 'react'
import FacilityRentalInsert from '../../components/facilityRental/FacilityRentalInsert'
import { useNavigate } from 'react-router-dom'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'

const FacilityRentalInsertContainer = () => {
    
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [price,setPrice] = useState('0')
    const [location,setLocation] = useState('경기')
    const [address,setAddress] = useState('')
    const [liveDate,setLiveDate] = useState('')
    const [account1,setAccount1] = useState('신한은행')
    const [account2,setAccount2] = useState('')
    const [file,setFile] = useState([])

    const username = 'gangjinsu'
    const phone = '01025258725'
    const writer = 'aster'

    const navi = useNavigate();

    const insertHandler = async ()=>{
      // let formData = new FormData()
      // formData.append('file',file)
      // setFile(formData)
      const response = await frApi.frInsert(sets)
      console.log(response)
      const data = await response.data
      console.log(data)
      if(data!=null){
          navi(`/fr/${data}`)
      }else{
          navi(`/fr/insert`)
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
        insertHandler,
        file,
        username,
        phone,
        writer
      }

  return (
    <>
        <FacilityRentalInsert sets={sets}></FacilityRentalInsert>
    </>
  )
}

export default FacilityRentalInsertContainer