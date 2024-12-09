import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/userSlice';
import { signin } from '../../services/accountService'; // Import service signin
import './Signin.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            setErrorMessage('Tên người dùng và mật khẩu không được để trống.');
            return;
        } else {
            try {
                const response = await signin(username, password);
                console.log(response)
                if (response.data.statusCode !== 200) {
                    alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');

                } else {
                    const data = response.data.data;
                    dispatch(login({ userInfo: data }));
                    navigate('/');
                }

            } catch (error) {
                setErrorMessage(error.message || 'Đã có lỗi xảy ra.');
            } finally {
                setIsLoading(false);
            }
        }




    };

    return (
        <div className="login-container">
            <div className="login">
                <div className="login-content">
                    <h1 className="title">Đăng nhập</h1>
                    <span className="register-link-container">
                        Chưa có tài khoản? <Link to="/signup" className="bold-item">Đăng ký ngay</Link>
                    </span>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Tên người dùng"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-container">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <Link to="/forgot-password">Quên mật khẩu?</Link>
                        </div>
                        <button
                            type="submit"
                            className="login-button"
                            disabled={!username.trim() || !password.trim() || isLoading}
                        >
                            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
