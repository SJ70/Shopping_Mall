import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { RootState } from '../modules';
import { logout } from '../modules/user';
import Cart from './Cart';

const Header = () => {
    return (
        <header>
            <div className='header-wrap'>
                <Link className='logo' to='/products/all'>Shop</Link>
                <CartBtn></CartBtn>
                <Link className='link' to='/my-page'>마이페이지</Link>
                <LoginOrLogOut></LoginOrLogOut>
            </div>
        </header>
    )
}

const CartBtn = () => {

    const cart = useSelector((state: RootState) => state.cart.list);

    return (
        <div className='cart-btn'>
            <Link className='link' to='/cart'>장바구니</Link>
            <div className= {cart.length === 0 ? 'disabled' : 'cart-items-count'}>{cart.length}</div>
            <div className='cart-preview'>
                <Cart></Cart>
            </div>
        </div>
    )
}

const LoginOrLogOut = () => {

    const userId = useSelector((state: RootState) => state.user.uid);

    return userId? (
        <LogOut></LogOut>
    ) : (
        <Link className='link' to='/sign-in'>로그인</Link>
    )
}

const LogOut = () => {
    
    const dispatch = useDispatch();

    const onLogout = () => dispatch(logout() as Action);

    const onDoLogout = () => {
        onLogout();
        window.alert('로그아웃에 성공하였습니다.');
    }

    return (
        <button className='logout link' onClick={onDoLogout}>로그아웃</button>
    )
}

export default Header;