import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import Index from './pages/Index';
import TeamListContainer from './containers/Team/TeamListContainer';
import LiveBoardRead from './pages/LiveBoard/LiveBoardRead';
import LiveBoardUpdate from './pages/LiveBoard/LiveBoardUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
        <Route path='/liveBoard' element={ <LiveBoardList/> }/>
        <Route path='/liveBoard/:no' element={ <LiveBoardRead/> }/>
        <Route path='/liveBoard/update/:no' element={ <LiveBoardUpdate/> }/>
        <Route path='/teamList' element={ <TeamListContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
