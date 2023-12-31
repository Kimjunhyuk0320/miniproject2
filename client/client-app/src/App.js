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
import NotFound from './pages/Error/NotFound';
import ServerError from './pages/Error/ServerError';
import Test from './pages/Error/Test';
import LoginContextProvider from './contexts/LoginContextProvider';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function App() {


  return (
    <BrowserRouter>
      <LoginContextProvider>    {/* 로그인, 로그아웃 관련 context */}
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/join' element={<JoinPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage/update' element={<UserUpdatePage />} />  {/* v */}
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='/MyInfo' element={<MyInfo />} />
          <Route path='/TotalSearch' element={<TotalSearch />} />
          <Route path='/TicketSalesList' element={<TicketSalesList />} />
          <Route path='/TicketPurchaseList' element={<TicketPurchaseList />} />   {/* v */}
          <Route path='/liveBoard' element={<LiveBoardList />} />
          <Route path='/liveBoard/insert' element={<LiveBoardInsert />} />
          <Route path='/liveBoard/:no' element={<LiveBoardRead />} />
          <Route path='/liveBoard/update/:no' element={<LiveBoardUpdate />} />
          <Route path='/teamList' element={<TeamListPage />} />
          <Route path='/team/:teamNo' element={<TeamReadPage />} />
          <Route path='/team/update/:teamNo' element={<TeamUpdatePage />} />
          <Route path='/team/insert' element={<TeamInsertPage />} />
          <Route path='/team/app/:teamNo' element={<TeamRegPage />} />
          <Route path='/mypage/tllList' element={<TeamRegListPage />} />
          <Route path='/mypage/app/:appNo' element={<TeamRegReadPage />} />
          <Route path='/mypage/tlmList' element={<TeamMyRegListPage />} />
          <Route path='/mypage/clList' element={<TeamConfirmedLiveListPage />} />
          <Route path='/mypage/rrList' element={<FrBookingListPage />} />
          <Route path='/mypage/rreqList' element={<FrMyBookingListPage />} />
          <Route path='/frList' element={<FacilityRentalListPage />} />
          <Route path='/fr/:frNo' element={<FacilityRentalReadPage />} />
          <Route path='/fr/update/:frNo' element={<FacilityRentalUpdatePage />} />
          <Route path='/fr/insert' element={<FacilityRentalInsertPage />} />
          <Route path='/join' element={<JoinPage />} />
          <Route path="/error/400" element={<NotFound />} />      {/* TODO : 404 페이지 꾸미기 */}
          <Route path="/error/500" element={<ServerError />} />   {/* TODO : 500 페이지 꾸미기 */}
          <Route path="/error/test" element={<Test />} />         {/* TODO : 500 페이지 꾸미기 */}
          <Route path="/*" element={<NotFound />} />              {/* Info : 맨 마지막에 있어야합니다. */}
        </Routes>
      </LoginContextProvider>
      {/* Error */}

    </BrowserRouter>
  );
}

export default App;
