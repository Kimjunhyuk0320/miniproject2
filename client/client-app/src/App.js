import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import Index from './pages/Index';
import TeamListContainer from './containers/Team/TeamListContainer';
import TeamReadContainer from './containers/Team/TeamReadContainer';
import TeamUpdateContainer from './containers/Team/TeamUpdateContainer';
import TeamRegContainer from './containers/Team/TeamRegContainer';
import TeamInsertContainer from './containers/Team/TeamInsertContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
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
