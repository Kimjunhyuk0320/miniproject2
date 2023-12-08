import React from 'react'

const TeamListStatic = () => {
    return (
        <>
            <div className="a">
                <div className="staticContainer">
                    <div className="staticTextSection">
                        <h1>오늘의 추천밴드</h1>
                        <h2>유다빈 밴드</h2>
                        <hr />
                            <p>
                                한 순간들도 빠짐없이 사랑했던 모든 순간과 진정한 안녕을 말할 때, 마지막으로 딱 한 번만 나를 다정하게 기억해 주기를
                            </p>
                            {/* <!-- <p>이런 식으로 추가하면 될 듯</p> --> */}
                    </div>
                    <div className="staticVideoSection">
                        {/* <!-- YouTube Video Embed Code --> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wmMrFpemJNY" frameBorder="0"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <div className="common_container liveDom">
                <div className="container__">
                    <div className="inner">
                        <div className="bx_info">
                            <div className="bx_inner">
                                <div className="lst_info">
                                    <a href="#" className="lst_poster" style={{ backgroundImage: "url(../img/teamList2.png)" }}>
                                        <span className="blind">공연 이미지</span>
                                    </a>
                                    <div className="bx_lst_view swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                        <div className="lst_wrap swiper-wrapper">
                                            <div className="lst_inner swiper-slide swiper-slide-active" style={{ width: "384px" }}>
                                                <div className="item_info">
                                                    <a href="#" className="lnk_info">
                                                        <em className="label">타이틀</em>
                                                        <span className="tit">[Online] 2023 KIMHYUNJOONG SPECIAL LIVE SHOW &lt; HENECIA, Let's party! &gt;</span>
                                                        <span className="ico ico_mark">
                                                            <span className="blind"><i className="fi fi-rr-comment"></i></span>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="item_info">
                                                    <a href="#" className="lnk_info">
                                                        <em className="label">공연시간</em>
                                                        <span className="tit">2023.11.11(토) 7:05PM</span>
                                                        <span className="ico ico_date">
                                                            <span className="blind"><i className="fi fi-rr-calendar"></i></span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="lst_inner swiper-slide swiper-slide-next" style={{ width: "384px" }}>
                                                <div className="item_info">
                                                    <div className="lst_cast_wrap type_only">
                                                        <ul className="lst_cast swiper-wrapper" style={{ display: "block" }}>
                                                            <li className="item_cast swiper-slide">
                                                                <span className="img_cast" style={{ backgroundImage: "url('//image.toast.com/aaaaab/ticketlink/TKL_4/다음수정김현중픽스.jpg')" }}></span>
                                                                <em className="name_cast">김현중</em>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item_info">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="lst_info">
                                    <a href="#" className="lst_poster" style={{ backgroundImage: "url(../img/teamList1.png)" }}>
                                        <span className="blind">공연 이미지</span>
                                    </a>
                                    <div className="bx_lst_view swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                        <div className="lst_wrap swiper-wrapper">
                                            <div className="lst_inner swiper-slide swiper-slide-active" style={{ width: "384px" }}>
                                                <div className="item_info">
                                                    <a href="#" className="lnk_info">
                                                        <em className="label">타이틀</em>
                                                        <span className="tit">[Online] 2023 KIMHYUNJOONG SPECIAL LIVE SHOW &lt; HENECIA, Let's party! &gt;</span>
                                                        <span className="ico ico_mark">
                                                            <span className="blind"><i className="fi fi-rr-comment"></i></span>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="item_info">
                                                    <div href="#" className="lnk_info">
                                                        <em className="label">공연시간</em>
                                                        <span className="tit">2023.11.11(토) 7:05PM</span>
                                                        <span className="ico ico_date">
                                                            <span className="blind"><i className="fi fi-rr-calendar"></i></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lst_inner swiper-slide swiper-slide-next" style={{ width: "384px" }}>
                                                <div className="item_info">
                                                    <div className="lst_cast_wrap type_only">
                                                        <ul className="lst_cast swiper-wrapper" style={{ display: "block" }}>
                                                            <li className="item_cast swiper-slide">
                                                                <span className="img_cast" style={{ backgroundImage: "url('//image.toast.com/aaaaab/ticketlink/TKL_4/다음수정김현중픽스.jpg')" }}></span>
                                                                <em className="name_cast">김현중</em>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="item_info">
                                                    {/* Your content here */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamListStatic