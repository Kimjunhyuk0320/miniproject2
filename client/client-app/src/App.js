import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiveBoardList from './pages/LiveBoard/LiveBoardList';
import Index from './pages/Index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Index/> } />
        <Route path='/liveBoard' element={ <LiveBoardList/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
