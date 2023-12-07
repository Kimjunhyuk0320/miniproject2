import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as frApi from '../../apis/facilityRental/facilityRentalApi'
import FacilityRentalUpdate from '../../components/facilityRental/FacilityRentalUpdate';

const FacilityRentalUpdateContainer = ({frNo}) => {

    
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [price,setPrice] = useState('')
    const [location,setLocation] = useState('')
    const [address,setAddress] = useState('')
    const [liveDate,setLiveDate] = useState('')
    const [account1,setAccount1] = useState('')
    const [account2,setAccount2] = useState('')
    const [file,setFile] = useState([])

    const navi = useNavigate();

    const updateHandler = async ()=>{
      const response = await frApi.frUpdate(sets)
      const data = await response.data
      if(data!=null){
          navi(`/fr/${frNo}`)
      }else{
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

      const setUpFr = async ()=>{
        const response = await frApi.frRead(frNo)
        const data = await response.data
        setTitle(data.title)
        setContent(data.content)
        setLocation(data.location)
        setAddress(data.address)
        setLiveDate(data.liveDate)
        setPrice(data.price)
        setAccount1(data.account.split('/')[0])
        setAccount2(data.account.split('/')[1])
      }

     

      useEffect(()=>{

        setUpFr()
      },[frNo])

  return (
    <div>
        <FacilityRentalUpdate sets={sets}></FacilityRentalUpdate>
    </div>
  )
}

export default FacilityRentalUpdateContainer