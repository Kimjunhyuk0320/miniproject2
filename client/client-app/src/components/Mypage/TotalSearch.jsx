import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import CardList from '../../components/LiveBoard/CardList'
import TeamList from '../../components/Team/TeamList'
import FacilityRentalList from '../../components/facilityRental/FacilityRentalList'
import * as myPages from '../../apis/myPage/myPageApi';

const TotalSearch = () => {
  // const [searchList, setSearchList] = useState({});

  const [frList, setFrList] = useState([])
  const [liveBoardList, setLiveBoardList] = useState([])
  const [teamList, setTeamList] = useState([])

  useEffect(() => {
    search()
    $(`#btn-search`).on(`click`, function () {
      search()
    })
    $(`#keyword`).on(`keyup`, function (event) {
      if (event.keyCode == 13) {
        search()
      }
    })

    // 
    $(".input").focus(function () {
      $(".close-btn").addClass("active");
    });

    // $(".input").focusout(function() {
    //   $(".close-btn").removeClass("active");
    // });

    $(".close-btn").click(function () {
      $(".close-btn").removeClass("active");
      $(".input").val("");
    });

    $(".reco_keword_box span").click(function () {
      var text = $(this).text();
      var keyword = text.replace('#', '');
      $("#keyword").val(keyword);
    });

    $(".input").on('input', function () {
      var inputText = $(this).val();
      $(".close-btn").toggleClass('active', inputText.length > 0);
    });
  }, [])


  const search = async () => {
    try {
      let keyword = document.getElementById('keyword').value;
      // alert(keyword)

      const response = await myPages.search(keyword);
      const data = response.data;
      // console.log(data);

      const { frList, liveBoardList, teamList } = data
      setFrList(frList)
      setLiveBoardList(liveBoardList)
      setTeamList(teamList)



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderTicketData = () => {
    // if (!Array.isArray(liveBoardList)) {
    //   return (
    //     <div>
    //       <p>데이터가 없습니다.</p>
    //     </div>
    //   );
    // }
    // return liveBoardList.map((search, index) => {
    //   return (
    //     <div key={index}>
    //       <h1>{search.title}</h1>
    //     </div>
    //   )
    // }
    // )
    return (

      <>
        <h1>클럽 대관 목록</h1>
        <p>클럽 대관 목록 검색 결과압니다.</p>
        <hr/>
        <FacilityRentalList frList={frList}></FacilityRentalList>
        <br/><br/><br/><br/>
        <h1>공연 목록</h1>
        <p>공연 목록 검색 결과압니다.</p>
        <hr/>
        <CardList liveBoardList={liveBoardList} />
        <br/><br/><br/><br/>
        <h1>공연 팀 모집 목록</h1>
        <p>공연 팀 모집 목록 검색 결과압니다.</p>
        <hr/>
        <TeamList teamList={teamList}></TeamList>
      </>

    )
  }


  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/cardList.css" />
        <link rel="stylesheet" href="/css/teamList.css" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css' />
      </Helmet>
      {/* new 검색창 */}
      <div className="searchContainer">
        <div className="wrapper">
          <div className="container_____">
            <div>
              <input type="text" name="keyword" id="keyword" className="input" placeholder="검색어를 입력해주세요." />
              <div id="btn-search"><i className="fi fi-rs-search"></i></div>
            </div>
            <div className="close-btn">&times;</div>
          </div>
          <div className="reco_keword_box">
            <p><span>#드림아트센터</span></p>
            <p><span>#공연</span></p>
            <p><span>#강남역</span></p>
            <p><span>#삼총사</span></p>
          </div>
        </div>
      </div>
      <div className="container" id="container">
        {renderTicketData()}
      </div>

    </>
  )
}

export default TotalSearch