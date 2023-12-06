import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import $ from 'jquery';

const TotalSearch = () => {

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
    
        function search() {
    
          let url = 'http://localhost:8080/totalSearch'
    
          let keyword = $(`#keyword`).val()
    
          let data = {
            'keyword': keyword
          }
    
          $.ajax({
            url: url,
            type: 'GET',
            data: data,
            success: function (response) {
              let totalList = response
              $(`#container`).html(totalList)
            },
            error: function (request, status, error) {
              console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" +
                "error:" + error)
              alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" +
                "error:" + error);
            }
          })
        }
    
    
    
    
    
        $(".input").focus(function() {
          $(".close-btn").addClass("active");
        });
    
        // $(".input").focusout(function() {
        //   $(".close-btn").removeClass("active");
        // });
    
        $(".close-btn").click(function() {
          $(".close-btn").removeClass("active");
          $(".input").val("");
        });
    
        $(".reco_keword_box span").click(function() {
          var text = $(this).text();
          var keyword = text.replace('#', '');
          $("#keyword").val(keyword);
        });
    
        $(".input").on('input', function() {
          var inputText = $(this).val();
          $(".close-btn").toggleClass('active', inputText.length > 0);
        });
    }, [])
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
                            <input type="text" name="keyword" id="keyword" class="input" placeholder="검색어를 입력해주세요." />
                            <div id="btn-search"><i class="fi fi-rs-search"></i></div>
                        </div>
                        <div className="close-btn">&times;</div>
                    </div>
                    <div class="reco_keword_box">
                        <p><span>#드림아트센터</span></p>
                        <p><span>#공연</span></p>
                        <p><span>#강남역</span></p>
                        <p><span>#삼총사</span></p>
                    </div>
                </div>
            </div>

            <div>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
                <h1>
                    asdl;ijsdfl;jfsd
                </h1>
            </div>

            <div class="container" id="container">

            </div>
        </>
    )
}

export default TotalSearch