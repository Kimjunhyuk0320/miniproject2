import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Index from './pages/Index';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import LiveBoardRead from './pages/LiveBoard/LiveBoardRead';
import LiveBoardUpdate from './pages/LiveBoard/LiveBoardUpdate';
import MyPage from './pages/MyPage/MyPage';
import MyInfo from './pages/MyPage/MyInfo';
import TotalSearch from './pages/MyPage/TotalSearch';
import TicketPurchaseList from './pages/MyPage/TicketPurchaseList';
import TicketSalesList from './pages/MyPage/TicketSalesList';
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
import FrBookingListPage from './pages/MyPage/FrBookingListPage';
import FrMyBookingListPage from './pages/MyPage/FrMyBookingListPage';
import TeamRegReadPage from './pages/MyPage/TeamRegReadPage';
import LiveBoardInsert from './pages/LiveBoard/LiveBoardInsert';
import TeamConfirmedLiveListPage from './pages/Team/TeamConfirmedLiveListPage';
import JoinPage from './pages/Users/JoinPage';
import LoginPage from './pages/Users/LoginPage';
import UserUpdatePage from './pages/Users/UserUpdatePage';
import UserContext from './context/UserContext';
import { useContext } from 'react';

function App() {

  const { jwtSets } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/liveBoard' element={<LiveBoardList />} />
        <Route path='/TotalSearch' element={<TotalSearch />} />
        <Route path='/frList' element={<FacilityRentalListPage />} />
        <Route path='/teamList' element={<TeamListPage />} />
        <Route path='/team/:teamNo' element={<TeamReadPage />} />
        <Route path='/fr/:frNo' element={<FacilityRentalReadPage />} /><Route path='/liveBoard/:no' element={<LiveBoardRead />} />
        {jwtSets.isLogin && (
          <>
            {jwtSets.isCLUB && (
              <>
                <Route path='/mypage/rrList' element={<FrBookingListPage />} />
                <Route path='/fr/update/:frNo' element={<FacilityRentalUpdatePage />} />
                <Route path='/fr/insert' element={<FacilityRentalInsertPage />} />
              </>
            )}
            {jwtSets.isBAND && (
              <>
                <Route path='/team/update/:teamNo' element={<TeamUpdatePage />} />
                <Route path='/team/insert' element={<TeamInsertPage />} />
                <Route path='/team/app/:teamNo' element={<TeamRegPage />} />
                <Route path='/mypage/tllList' element={<TeamRegListPage />} />
                <Route path='/mypage/app/:appNo' element={<TeamRegReadPage />} />
                <Route path='/mypage/tlmList' element={<TeamMyRegListPage />} />
                <Route path='/mypage/clList' element={<TeamConfirmedLiveListPage />} />
                <Route path='/mypage/rreqList' element={<FrMyBookingListPage />} />
                <Route path='/TicketSalesList' element={<TicketSalesList />} />
                <Route path='/liveBoard/insert' element={<LiveBoardInsert />} />
                <Route path='/liveBoard/update/:no' element={<LiveBoardUpdate />} />
              </>
            )}
            {jwtSets.isUSER && (
              <>

              </>
            )}
            <Route path='/mypage/update' element={<UserUpdatePage />} />
            <Route path='/MyPage' element={<MyPage />} />
            <Route path='/MyInfo' element={<MyInfo />} />
            <Route path='/TicketPurchaseList' element={<TicketPurchaseList />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
