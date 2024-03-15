import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/products/all'>상점</Link>
            <Link to='/sign-in'>로그인</Link>
            <Link to='/sign-up'>회원가입</Link>
            <Link to='/my-page'>마이페이지</Link>
        </header>
    )
}

export default Header;