

import React from 'react';
import { Link } from 'react-router-dom';

const FacilityRentalList = ({ frList }) => {
  return (
    <>
      <div className="container card_list">
        <div className="row" id="team-data">
          {frList.length === 0 ? (
            <div className="card-body">
              <h5 className="card-text" style={{ textAlign: 'center', padding: '10px', fontSize: '12px' }}>
                조회된 데이터가 없습니다.
              </h5>
            </div>
          ) : (
            frList.map((fr) => (
              <div className="card col-3" key={fr.frNo}>
                <Link to={`/fr/${fr.frNo}`}>
                  {fr.thumbnail && <img src={`/api/file/img/${fr.thumbnail.fileNo}`} id="card-img" alt={fr.title} />}
                  {!fr.thumbnail && <img src="/img/clubr3.jpeg" id="card-img" alt={fr.title} />}
                </Link>
                <div className="card-body">
                  <Link to={`/fr/${fr.frNo}`}>
                    <h5 className="card-title">{fr.title}</h5>
                  </Link>
                  <p className="card-text">{fr.writer}</p>
                  <p className="card-text">{fr.location}</p>
                  <p className="card-text">{fr.price}</p>
                  <p className="card-text card-text-date">{fr.liveDate}</p>
                  {fr.confirmed === 1 && (
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: 'red',
                        color: 'yellow',
                        display: 'inline',
                        borderRadius: '3px',
                        padding: '3px 5px',
                        fontSize: '11px',
                      }}
                    >
                      마감
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FacilityRentalList;
