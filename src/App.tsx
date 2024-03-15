import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyPage from './components/MyPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/my-page' Component={MyPage}/>
        <Route path='/sign-in' Component={SignIn}/>
        <Route path='/sign-up' Component={SignUp}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
