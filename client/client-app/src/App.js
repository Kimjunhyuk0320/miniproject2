import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfo from './containers/MyPage/MyInfo';
import MyPage from './containers/MyPage/MyPage';
import TeamListContainer from './containers/Team/TeamListContainer';
import Index from './pages/Index';
import TicketPurchaseList from './pages/MyPage/TicketPurchaseList';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
        <Route path='/MyPage' element={ <MyPage/> } />
        <Route path='/MyInfo' element={ <MyInfo/> } />
        <Route path='/TicketPurchaseList' element={ <TicketPurchaseList/> } />
        <Route path='/liveBoard' element={ <LiveBoardList/> }/>
        <Route path='/teamList' element={ <TeamListContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
