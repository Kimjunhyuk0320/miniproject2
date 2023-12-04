import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyInfo from './containers/MyPage/MyInfo';
import MyPage from './containers/MyPage/MyPage';
import TeamListContainer from './containers/Team/TeamListContainer';
import TeamReadContainer from './containers/Team/TeamReadContainer';
import TeamUpdateContainer from './containers/Team/TeamUpdateContainer';
import TeamRegContainer from './containers/Team/TeamRegContainer';
import TeamInsertContainer from './containers/Team/TeamInsertContainer';
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
        <Route path='/team/:teamNo' element={ <TeamReadContainer/> } />
        <Route path='/team/update/:teamNo' element={ <TeamUpdateContainer/> } />
        <Route path='/team/insert' element={ <TeamInsertContainer/> } />
        <Route path='/team/app/:teamNo' element={ <TeamRegContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
