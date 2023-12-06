import React from 'react';
import TotalSearchContainer from '../../containers/MyPage/TotalSearchContainer';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import './css/TotalSearch.css';

const TotalSearch = () => {
    return (
        <>
            <Header />
            <div className='TotalSearch'>
                <TotalSearchContainer />    
            </div>
            <Footer />
        </>
    )
}

export default TotalSearch