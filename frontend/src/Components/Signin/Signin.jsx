import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const SignIn = () => {
    const [style1, setStyle1] = useState('notfocus');
    const [style2, setStyle2] = useState('notfocus');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const changeFocus1 = () => {
        setStyle1('focus1');
    };

    const changeFocus2 = () => {
        setStyle2('focus2');
    };

    const changeNotFocus1 = () => {
        setStyle1('notfocus');
    };

    const changeNotFocus2 = () => {
        setStyle2('notfocus');
    };

    return (
        <div className="login-container">
            <div className="login">
                <div className="login-content">
                    <h1 className="title">Đăng nhập</h1>
                    <span className="register-link-container">
                        Chưa có tài khoản ? <Link to="/signup" className="bold-item">Đăng ký ngay</Link>
                    </span>
                    <form>
                        <div className={`input-container ${style1}`}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={changeNotFocus1}
                                onMouseDown={changeFocus1}
                                required
                            />
                        </div>

                        <div className={`input-container ${style2}`}>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={changeNotFocus2}
                                onMouseDown={changeFocus2}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <Link to="/forgot-password">Quên mật khẩu</Link>
                        </div>
                        <button type="submit" className="login-button">Đăng nhập</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignIn;
