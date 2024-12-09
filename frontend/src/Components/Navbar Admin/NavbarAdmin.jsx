import React from 'react';
import './NavbarAdmin.css';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/images/logo.png'

const NavbarAdmin = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/ticket" >
                            <i className="icon">🎟</i>
                            Quản lí vé
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/user" >
                            <i className="icon">🎟</i>
                            Quản lí nguoi dung
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/movie">
                            <i className="icon">🎟</i>
                            Quản lí phim
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default NavbarAdmin;
