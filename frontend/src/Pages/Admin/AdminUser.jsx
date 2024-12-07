import React from 'react';
import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';

const AdminUser = () => {
    const users = [
        {
            id: 1,
            name: 'Hoa Nguyen',
            email: 'hoa.nguyen@example.com',
            total_amount: '$100',
        },
        {
            id: 2,
            name: 'Abc',
            email: 'abc@example.com',
            total_amount: '$50',
        },
    ];



    return (
        <div className="admin-container">
            <NavbarAdmin />

            <main className="admin-content">
                <header className="admin-header">
                    <input type="text" placeholder="Tìm kiếm..." className="admin-search-bar" />
                    <div className="admin-user-info">
                        <span>Nguyen Duc Hoa</span>
                        <img src="user-avatar.png" alt="User Avatar" className="admin-avatar" />
                    </div>
                </header>

                <div className="admin-management">
                    <h1 className="admin-title">Quản lí người dùng</h1>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Tổng chi phí hóa đơn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.total_amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default AdminUser;
