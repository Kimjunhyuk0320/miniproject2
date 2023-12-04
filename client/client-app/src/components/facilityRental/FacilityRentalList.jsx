import React from 'react'
import { Link } from 'react-router-dom'

const FacilityRentalList = ({frList}) => {


  return (
    <>
        <div class="container card_list">
            <div class="row" id="team-data">

                {frList.length==0?(
                    <div class="card-body">
                    <h5 class="card-text" style="text-align : center; padding:10px; font-size:12px;">조회된 데이터가 없습니다.</h5>
                 </div>
                ) : (
                frList.map((fr)=>(

                    <div class="card col-3">
                     <Link to={`fr/${fr.frNo}`}>
                   {fr.thumbnail &&(
                    <img src={`/api/file/img/${fr.thumbnail.fileNo}`} id="card-img"/>
                   )}
                   {
                    fr.thumbnail || (
                        <img src="/img/defaultImage.png" id="card-img"></img>
                    )
                   }
                   </Link>
                       <div class="card-body">
                               <h5 class="card-title">{fr.title}</h5>
                   }
                   tr += `
                           
                               </a>
                               <p class="card-text">${teamList[i].writer}</p>
                               <p class="card-text">${teamList[i].location}</p>
                               <p class="card-text">${teamList[i].price}</p>
                               <p class="card-text card-text-date">${teamList[i].liveDate}</p>
                               `
                   if (teamList[i].confirmed == 1) {
                       tr += `
                                   <p class="card-text" style="background-color: red; color: yellow; display: inline; border-radius: 3px; padding: 3px 5px; font-size: 11px">마감</p>                       
                                   `
                   }
                   tr += `
                           </div>
                       </div>
             }
                ))
                )
            </div>
        </div>
    </>
  )
}

export default FacilityRentalList