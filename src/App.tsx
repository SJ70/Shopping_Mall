import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyPage from './components/MyPage';
import Header from './components/Header';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/products/all"/>} />
            <Route path='/products/:categoryId' Component={Products}/>
            <Route path='/product/:productId' Component={Product}/>
            <Route path='/my-page' Component={MyPage}/>
            <Route path='/sign-in' Component={SignIn}/>
            <Route path='/sign-up' Component={SignUp}/>
            <Route path='/cart' Component={Cart}/>
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
