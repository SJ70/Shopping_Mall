import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyPage from './components/MyPage';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path='/products/:categoryId' Component={Products}/>
            <Route path='/my-page' Component={MyPage}/>
            <Route path='/sign-in' Component={SignIn}/>
            <Route path='/sign-up' Component={SignUp}/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
