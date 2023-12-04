import React from 'react'

const TeamReg = ({sets}) => {


  return (
    <>
        <div id="topContent">
            <h1>공연팀 참가 신청</h1>
            <p>공연팀 참가 신청글을 작성합니다. 꼼꼼하게 수정해 주세요.</p>
            <hr/>
        </div>
        <div id="insertContainer">
            <div className="tableContainer">
                <table>
                <tr>
                    <td>제목</td>
                    <td>
                    <input type="text" name="title" id="title" value={sets.title} onChange={(e)=>{
                        sets.setTitle(e.target.value)
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td>밴드명</td>
                    <td>
                    <input type="bandName" name="bandName" id="bandName" value={sets.bandName} onChange={(e)=>{
                        sets.setBandName(e.target.value)
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td>게시글 적성 에디터</td>
                    <td>
                    <textarea type="text" name="content" id="content" value={sets.content} onChange={(e)=>{
                        sets.setContent(e.target.value)
                    }}></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                    <div className="submitDiv">
                        <button onClick={sets.regHandler}>참가신청</button>
                    </div>
                    </td>
                </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default TeamReg