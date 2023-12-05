import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfoContainer from './containers/MyPage/MyInfoContainer';
import Index from './pages/Index';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import LiveBoardRead from './pages/LiveBoard/LiveBoardRead';
import LiveBoardUpdate from './pages/LiveBoard/LiveBoardUpdate';
import FacilityRentalListContainer from './containers/facilityRental/FacilityRentalListContainer';
import FacilityRentalReadContainer from './containers/facilityRental/FacilityRentalReadContainer';
import FacilityRentalUpdateContainer from './containers/facilityRental/FacilityRentalUpdateContainer';
import FacilityRentalInsertContainer from './containers/facilityRental/FacilityRentalInsertContainer';
import MyPage from './pages/MyPage/MyPage';
import MyInfo from './pages/MyPage/MyInfo';
import TicketPurchaseList from './pages/MyPage/TicketPurchaseList';
import TicketSalesList from './pages/MyPage/TicketSalesList';
import TeamListPage from './pages/Team/TeamListPage';
import TeamReadPage from './pages/Team/TeamReadPage';
import TeamUpdatePage from './pages/Team/TeamUpdatePage';
import TeamInsertPage from './pages/Team/TeamInsertPage';
import TeamRegPage from './pages/Team/TeamRegPage';
import TeamRegListPage from './pages/Team/TeamRegListPage';
import LiveBoardInsert from './pages/LiveBoard/LiveBoardInsert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
        <Route path='/MyPage' element={ <MyPage/> } />
        <Route path='/MyInfo' element={ <MyInfo/> } />
        <Route path='/TicketSalesList' element={ <TicketSalesList/> } />
        <Route path='/TicketPurchaseList' element={ <TicketPurchaseList/> } />
        <Route path='/liveBoard' element={ <LiveBoardList/> }/>
        <Route path='/liveBoard/insert' element={ <LiveBoardInsert/> }/>
        <Route path='/liveBoard/:no' element={ <LiveBoardRead/> }/>
        <Route path='/liveBoard/update/:no' element={ <LiveBoardUpdate/> }/>
        <Route path='/teamList' element={ <TeamListPage/> } />
        <Route path='/team/:teamNo' element={ <TeamReadPage/> } />
        <Route path='/team/update/:teamNo' element={ <TeamUpdatePage/> } />
        <Route path='/team/insert' element={ <TeamInsertPage/> } />
        <Route path='/team/app/:teamNo' element={ <TeamRegPage/> } />
        <Route path='/mypage/tllList' element={ <TeamRegListPage/> } />
        <Route path='/frList' element={ <FacilityRentalListContainer/> } />
        <Route path='/fr/:frNo' element={ <FacilityRentalReadContainer/> } />
        <Route path='/fr/update/:frNo' element={ <FacilityRentalUpdateContainer/> } />
        <Route path='/fr/insert' element={ <FacilityRentalInsertContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
