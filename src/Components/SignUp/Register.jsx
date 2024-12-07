import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Register.css';
import Navbar from '../Navbar/Navbar';

const Register = () => {
    const [style1, setStyle1] = useState('notfocus');
    const [style2, setStyle2] = useState('notfocus');
    const [style3, setStyle3] = useState('notfocus');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    
    const changeFocus1 = () => {
        setStyle1('focus1');
    };

    const changeFocus2 = () => {
        setStyle2('focus2');
    };

    const changeFocus3 = () => {
        setStyle3('focus3');
    };

    const changeNotFocus1 = () => {
        setStyle1('notfocus');
    };

    const changeNotFocus2 = () => {
        setStyle2('notfocus');
    };

    const changeNotFocus3 = () => {
        setStyle3('notfocus');
    };

    return (
      
        <div className="register_container">
            <div className="register">
                <div className="register_content">
                    <h1 className="title">Tạo tài khoản</h1>
                    <span className="login_link_container">
                        Đã có tài khoản ? <Link to="/signin" className="bold_item">Đăng nhập</Link>
                    </span>
                    {successMessage && <p className="success_message">{successMessage}</p>}
                    <form >
                        <div className='wrap_input_container'>
                            <div className={`input_container ${style1}`}>
                                <input
                                    type="text"
                                    placeholder="Họ"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={changeNotFocus1}
                                    onMouseDown={changeFocus1}
                                    required
                                />
                            </div>
                            <div className={`input_container ${style1}`}>
                                <input
                                    type="text"
                                    placeholder="Tên đệm và tên"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={changeNotFocus1}
                                    onMouseDown={changeFocus1}
                                    required
                                />
                            </div>
                        </div>

                        <div className={`input_container ${style2}`}>
                            <input
                                type="Email"
                                placeholder="Email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={changeNotFocus2}
                                onMouseDown={changeFocus2}
                                required
                            />
                        </div>

                        <div className='pass_input_container'>
                        <div className={`input_container ${style3}`}>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={changeNotFocus3}
                                onMouseDown={changeFocus3}
                                required
                            />
                        </div>
                        <div className={`input_container ${style3}`}>
                            <input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={changeNotFocus3}
                                onMouseDown={changeFocus3}
                                required
                            />
                        </div>
                        </div>

                        
                        <button type="submit" className="register_button">Đăng ký</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
