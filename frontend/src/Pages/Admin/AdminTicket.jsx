import React from 'react';
import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';

const AdminTicket = () => {
    const users = [
        {
            id: 1,
            movie: 'Avengers: Endgame',
            customer_email: 'hoa.nguyen@example.com',
            show_time: '2024-12-06 14:00',
            branch: 'Cinemax 1',
            total_amount: '$100',
        },
        {
            id: 2,
            movie: 'Spider-Man: No Way Home',
            customer_email: 'abc@example.com',
            show_time: '2024-12-06 16:00',
            branch: 'Cinemax 2',
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
                    <h1 className="admin-title">Quản lí ve</h1>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Phim</th>
                                <th>Khách hàng</th>
                                <th>Xuất chiếu</th>
                                <th>Chi nhánh</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.movie}</td>
                                    <td>{user.customer_email}</td>
                                    <td>{user.show_time}</td>
                                    <td>{user.branch}</td>
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

export default AdminTicket;
