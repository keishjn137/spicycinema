import './AdminTicket.css';
import NavbarAdmin from '../../Components/Navbar Admin/NavbarAdmin';
import { getAllbill } from '../../services/billService';
import React, { useEffect, useState } from 'react';

const AdminTicket = () => {
    const [ticket, setTicket] = useState([]); 
    const [search, setSearch] = useState(''); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllbill(); 
                console.log('Dữ liệu từ API:', data);
                if (data && data.data && Array.isArray(data.data)) {
                    setTicket(data.data); 
                } else {
                    console.warn('API không trả về danh sách hợp lệ');
                }
            } catch (err) {
                console.error('Lỗi khi lấy danh sách vé:', err);
            }
        };

        fetchUsers(); 
    }, []); 

 
    const filteredTickets = ticket.filter(user =>
        user.moviename.toLowerCase().includes(search.toLowerCase()) || 
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
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                    <div className="admin-user-info">
                        <span>Nguyen Duc Hoa</span>
                        <img src="user-avatar.png" alt="User Avatar" className="admin-avatar" />
                    </div>
                </header>

                <div className="admin-management">
                    <h1 className="admin-title">Quản lí vé</h1>
                    <table className="admin-table">
                        <thead>
                            <tr>
                               
                                <th>Phim</th>
                                <th>Khách hàng</th>
                                <th>Xuất chiếu</th>
                                <th>Chi nhánh</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTickets.map(user => (
                                <tr key={user.id}>
                                    
                                    <td>{user.moviename}</td>
                                    <td>{user.gmail}</td>
                                    <td>{user.showtime}</td>
                                    <td>{user.branchname}</td>
                                    <td>{user.total_amount || 0 }</td>
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
