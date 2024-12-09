import React, { useEffect, useState } from 'react';
import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';
import { getAllUser } from '../../services/accountService';

const AdminUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUser();
                if (data && data.data) {
                    setUsers(data.data);
                    console.log(data)
                } else {
                    console.warn('API không trả về dữ liệu hợp lệ');
                }
            } catch (err) {
                console.error('Lỗi khi lấy danh sách người dùng:', err);
            }
        };

        fetchUsers();
    }, []);

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
                            {users && users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.gmail}</td>
                                    <td>{user.total_amount || 0}</td>
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
