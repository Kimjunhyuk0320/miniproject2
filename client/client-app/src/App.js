import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfoContainer from './containers/MyPage/MyInfoContainer';
import TeamInsertContainer from './containers/Team/TeamInsertContainer';
import TeamListContainer from './containers/Team/TeamListContainer';
import TeamReadContainer from './containers/Team/TeamReadContainer';
import TeamRegContainer from './containers/Team/TeamRegContainer';
import TeamUpdateContainer from './containers/Team/TeamUpdateContainer';
import Index from './pages/Index';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import LiveBoardRead from './pages/LiveBoard/LiveBoardRead';
import LiveBoardUpdate from './pages/LiveBoard/LiveBoardUpdate';
import FacilityRentalListContainer from './containers/facilityRental/FacilityRentalListContainer';
import FacilityRentalReadContainer from './containers/facilityRental/FacilityRentalReadContainer';
import FacilityRentalUpdateContainer from './containers/facilityRental/FacilityRentalUpdateContainer';
import FacilityRentalInsertContainer from './containers/facilityRental/FacilityRentalInsertContainer';
import MyPage from './pages/MyPage/MyPage';
import TicketPurchaseList from './pages/MyPage/TicketPurchaseList';
import TicketSalesList from './components/Mypage/TicketSalesList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
        <Route path='/MyPage' element={ <MyPage/> } />
        <Route path='/MyInfo' element={ <MyInfoContainer/> } />
        <Route path='/TicketSalesList' element={ <TicketSalesList/> } />
        <Route path='/TicketPurchaseList' element={ <TicketPurchaseList/> } />
        <Route path='/liveBoard' element={ <LiveBoardList/> }/>
        <Route path='/liveBoard/:no' element={ <LiveBoardRead/> }/>
        <Route path='/liveBoard/update/:no' element={ <LiveBoardUpdate/> }/>
        <Route path='/teamList' element={ <TeamListContainer/> } />
        <Route path='/team/:teamNo' element={ <TeamReadContainer/> } />
        <Route path='/team/update/:teamNo' element={ <TeamUpdateContainer/> } />
        <Route path='/team/insert' element={ <TeamInsertContainer/> } />
        <Route path='/team/app/:teamNo' element={ <TeamRegContainer/> } />
        <Route path='/frList' element={ <FacilityRentalListContainer/> } />
        <Route path='/fr/:frNo' element={ <FacilityRentalReadContainer/> } />
        <Route path='/fr/update/:frNo' element={ <FacilityRentalUpdateContainer/> } />
        <Route path='/fr/insert' element={ <FacilityRentalInsertContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
