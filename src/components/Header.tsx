import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

const Header = () => {
    return (
        <header>
            <div className='header-wrap'>
                <Link className='logo' to='/products/all'>Shop</Link>
                <Link className='link' to='/cart'>장바구니</Link>
                <Link className='link' to='/my-page'>마이페이지</Link>
                <Link className='link' to='/sign-in'>로그인</Link>
                <Link className='link' to='/sign-up'>회원가입</Link>
            </div>
        </header>
    )
}

export default Header;