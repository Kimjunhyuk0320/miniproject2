import React from 'react'
import { Link } from 'react-router-dom'

const FacilityRentalRead = ({ fr, delHandler,resvationHandler }) => {
    const updDate = new Date(fr.updDate)
    return (
        <>
            <div className="totalContainer">
                <div className="topContentContainer">
                    <div className="imgContainer">
                        {
                            fr.thumbnail!=null && <img src={`/api/file/img/${fr.thumbnail.fileNo}`} />
                        }
                        {fr.thumbnail!=null || <img src={`/img/clubr3.jpeg`}/>}
                    </div>
                    <div className="contentContainer">
                        <div className="tableContainer">
                            <table>
                                <tr>
                                    <td colSpan="2">
                                        <div className="titleBox">
                                            <div>
                                                <h1>{fr.title}</h1>
                                                <div>
                                                    <p style={{ display: 'inline-block' }}>업로드 시각 : </p>
                                                    <p style={{ display: 'inline-block' }}>{
                                                        `${updDate.getFullYear()}년 ${updDate.getMonth() + 1}월 ${updDate.getDate()}일 ${updDate.getHours()}시 ${updDate.getMinutes()}분`
                                                    }</p>
                                                </div>
                                            </div>
                                            <div className="heart">
                                                <div style={{ marginTop: '10px' }}>
                                                    <p style={{ display: 'inline-block' }}>조회수 : </p>
                                                    <p style={{ display: 'inline-block' }}>{fr.views}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </td>
                                </tr>
                                <tr>
                                    <td>글번호</td>
                                    <td>
                                        <span >{fr.frNo}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>작성자</td>
                                    <td>
                                        <span>{fr.writer}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>대관일자</td>
                                    <td>
                                        <span>{fr.liveDate}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>대관가격</td>
                                    <td>
                                        <span>{fr.price}원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>지역</td>
                                    <td>
                                        <span>{fr.location}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>장소</td>
                                    <td>
                                        <span>{fr.address}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>예약여부</td>
                                    <td>
                                        {fr.confirmed == 1 && <span>예약완료</span>}
                                        {fr.confirmed == 0 && <span>신청가능</span>}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>



                <div className="bottomContainer">
                    <div className="bottomContainerForRental">
                        <Link to="/frList">
                            <button type="button">목록</button>
                        </Link>
                        <div>
                            <Link to={`/fr/update/${fr.frNo}`}>
                            <button type="button" id="blue-btn">수정</button>
                            </Link>
                        </div>
                        <div>
                            <button type="button" id="red-btn" onClick={()=>{
                                let result = window.confirm('정말로 삭제하시겠습니까?');
                                if(result==true)
                                delHandler()}}>삭제</button>
                        </div>
                    </div>
                    <div>
                        
                        {fr.confirmed == 0 && <button type="button" id="red-btn" onClick={resvationHandler}>대관하기</button>}
                    </div>
                </div>

                <div className="textContainer">
                    <p dangerouslySetInnerHTML={{ __html: fr.content }}></p>
                </div>
            </div>
        </>
    )
}

export default FacilityRentalRead