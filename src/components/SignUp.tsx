import React, { useState } from 'react';
import { isEmailDuplicated, signUpEmail } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/Sign.css'

const SignUp = () => {

    const [email, setEmail] = useState<string>('');
    const [canUseEmail, setCanUseEmail] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [verifyPassword, setVerifyPassword] = useState<string>('');

    const navigate = useNavigate();

    const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setCanUseEmail(false);
    }

    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleInputVerifyPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyPassword(e.target.value);
    }

    const handleCheckEmailDuplicated = async () => {
        if (await isEmailDuplicated(email)) {
            window.alert('이미 사용 중인 이메일입니다.');
        }
        else {
            window.alert('사용 가능한 이메일입니다.');
            setCanUseEmail(true);
        }
    }

    const handleSumbit = async () => {
        if (password !== verifyPassword) {
            window.alert('비밀번호가 서로 다릅니다.');
            return;
        }
        try {
            await signUpEmail(email, password);
            window.alert('회원가입이 완료되었습니다.');
            navigate('../sign-in');
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <div className='sign'>
            <p className='title'>회원가입</p>
            <div>
                <input type='text' placeholder='이메일' onChange={handleInputEmail} value={email}></input>
                <button disabled={canUseEmail} onClick={handleCheckEmailDuplicated}>{canUseEmail ? '사용 가능' : '중복 확인'}</button>
            </div>
            <input type='password' placeholder='비밀번호' onChange={handleInputPassword} value={password}></input>
            <input type='password' placeholder='비밀번호 확인' onChange={handleInputVerifyPassword} value={verifyPassword}></input>
            <button type='submit' onClick={handleSumbit}>가입하기</button>
            <span>계정이 이미 있습니까?</span>
            <Link className='link' to='../sign-in'>로그인하기</Link>
        </div>
    )
}

export default SignUp;