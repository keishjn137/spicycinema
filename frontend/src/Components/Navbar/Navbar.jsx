import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from  '../../asset/images/logo.png';

const Navbar = () => {
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
        <Link to="/signin">
          <button className="navbar-login-button">Đăng Nhập</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
