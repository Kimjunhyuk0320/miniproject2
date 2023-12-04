import React from 'react';

const CardList = ({ liveBoardList }) => {
  return (
    <div>
      CardList
      <div className="container card_list">
        <div className="row" id="team-data">
          {liveBoardList.length === 0 ? (
            <div className="card-body">
              <h5 className="card-text">조회된 데이터가 없습니다.</h5>
            </div>
          ) : (
            liveBoardList.map((liveBoard) => (
              <div className="card col-3" key={liveBoard.boardNo}>
                <a href={`/liveBoard/read?boardNo=${liveBoard.boardNo}`}>
                  {liveBoard.thumbnail !== null && (
                    <img src={`api/file/img/${liveBoard.thumbnail.fileNo}`} id="card-img" alt="thumbnail" />
                  )}
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={`/liveBoard/read?boardNo=${liveBoard.boardNo}`}>{liveBoard.title}</a>
                  </h5>
                  <p className="card-text">{liveBoard.crew}</p>
                  {liveBoard.soldOut === 0 ? (
                    <p className="card-text">판매 중</p>
                  ) : (
                    <p className="card-text">매진</p>
                  )}
                  <p className="card-text">{liveBoard.address}</p>
                  <p className="card-text card-text-date">{liveBoard.liveDate}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardList;
