import React from 'react';
import TotalSearchContainer from '../../containers/MyPage/TotalSearchContainer';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import './css/TotalSearch.css';

const TotalSearch = () => {
    return (
        
        <div className='TotalSearch'>
            <Header />
                <TotalSearchContainer />    
            <Footer />
        </div>
    )
}

export default TotalSearch