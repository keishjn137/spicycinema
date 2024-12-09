import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../asset/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    try {
      return state.user.userInfo.userInfo?.[0]?.username;
    } catch (e) {
      console.error(e);
      return null;
    }
  });


  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>Lịch Chiếu</li>
        <li>Hệ Thống Rạp</li>
        <li>Khuyến Mãi/Sự Kiện</li>
        <li>Về Chúng Tôi</li>
      </ul>
      <div className="navbar-buttons">
        <button className="city-button">TP. Hồ Chí Minh</button>
        {!user ? (
          <Link to="/signin">
            <button className="navbar-login-button">Đăng Nhập</button>
          </Link>
        ) : (
          <div>
            <span className="navbar-user" style={{ backgroundColor: 'transparent', marginRight: '16px' }}>
              Chào, {user}
            </span>
            <button onClick={handleSignOut} className="navbar-login-button">
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
