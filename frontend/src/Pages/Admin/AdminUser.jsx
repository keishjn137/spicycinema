import React, { useEffect, useState } from 'react';
import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';
import { getAllUser } from '../../services/accountService';

const AdminUser = () => {
    const [users, setUsers] = useState([]); // State để lưu danh sách người dùng
    const [search, setSearch] = useState(''); // State để lưu giá trị tìm kiếm

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUser();
                if (data && data.data) {
                    setUsers(data.data);
                    console.log(data);
                } else {
                    console.warn('API không trả về dữ liệu hợp lệ');
                }
            } catch (err) {
                console.error('Lỗi khi lấy danh sách người dùng:', err);
            }
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.gmail.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin-container">
            <NavbarAdmin />

            <main className="admin-content">
                <header className="admin-header">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="admin-search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Cập nhật giá trị tìm kiếm khi người dùng nhập
                    />
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
                            {filteredUsers.map((user) => (
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
