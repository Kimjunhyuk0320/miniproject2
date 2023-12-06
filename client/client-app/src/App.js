import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfoContainer from './containers/MyPage/MyInfoContainer';
import Index from './pages/Index';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import LiveBoardRead from './pages/LiveBoard/LiveBoardRead';
import LiveBoardUpdate from './pages/LiveBoard/LiveBoardUpdate';
import MyPage from './pages/MyPage/MyPage';
import TicketPurchaseList from './pages/MyPage/TicketPurchaseList';
import TicketSalesList from './components/Mypage/TicketSalesList';
import TeamListPage from './pages/Team/TeamListPage';
import TeamReadPage from './pages/Team/TeamReadPage';
import TeamUpdatePage from './pages/Team/TeamUpdatePage';
import TeamInsertPage from './pages/Team/TeamInsertPage';
import TeamRegPage from './pages/Team/TeamRegPage';
import TeamRegListPage from './pages/MyPage/TeamRegListPage';
import FacilityRentalListPage from './pages/FacilityRental/FacilityRentalListPage';
import FacilityRentalReadPage from './pages/FacilityRental/FacilityRentalReadPage';
import FacilityRentalUpdatePage from './pages/FacilityRental/FacilityRentalUpdatePage';
import FacilityRentalInsertPage from './pages/FacilityRental/FacilityRentalInsertPage';
import TeamMyRegListPage from './pages/MyPage/TeamMyRegListPage';

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
        <Route path='/teamList' element={ <TeamListPage/> } />
        <Route path='/team/:teamNo' element={ <TeamReadPage/> } />
        <Route path='/team/update/:teamNo' element={ <TeamUpdatePage/> } />
        <Route path='/team/insert' element={ <TeamInsertPage/> } />
        <Route path='/team/app/:teamNo' element={ <TeamRegPage/> } />
        <Route path='/mypage/tllList' element={ <TeamRegListPage/> } />
        <Route path='/mypage/tlmList' element={ <TeamMyRegListPage/> } />
        <Route path='/frList' element={ <FacilityRentalListPage/> } />
        <Route path='/fr/:frNo' element={ <FacilityRentalReadPage/> } />
        <Route path='/fr/update/:frNo' element={ <FacilityRentalUpdatePage/> } />
        <Route path='/fr/insert' element={ <FacilityRentalInsertPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
