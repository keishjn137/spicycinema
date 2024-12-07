import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import backgroundImage from '../../asset/images/avengers.png'
import './MovieDetail.css'
import Box2d from '../../Components/2D/2D';
import { useParams } from 'react-router-dom';
import { Movie } from '../../asset/datas/movieData';
import { Place } from '../../asset/datas/placesData';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import { Seat } from '../../asset/datas/seatData';
import monitor_image from '../../asset/images/monitor.png'

const MovieDetail = () => {

    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [activeDropdownItem, setActiveDropdownItem] = useState(null);
    const [placeChoice, setPlaceChoice] = useState('');
    const [date, setDate] = useState(new Date());
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}/${month}`;
    };

    const { id } = useParams();
    const movie = Movie.find(movie => movie.id == id);

    const handleOverDropdownItem = (placeId) => {
        setActiveDropdownItem(placeId);
    }

    const handleOutDropdownItem = () => {
        setActiveDropdownItem(null);
    }

    const handlePlaceClick = (placeName) => {
        setDropdownStatus(false);
        setPlaceChoice(placeName);
    }



    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleChooseSeat = (seatId) => {
        const selectedSeat = Seat.find((seat) => seat.id === seatId);
        if (selectedSeat && selectedSeat.status === 'free') {
            setSelectedSeats((prevSelectedSeats) => {
                const isSeatSelected = prevSelectedSeats.includes(seatId);
                if (isSeatSelected) {
                    return prevSelectedSeats.filter((seat) => seat !== seatId);
                } else {
                    return [...prevSelectedSeats, seatId];
                }
            });
        }
    };
    const groupSeatsByRow = () => {
        const rows = {};
        Seat.forEach((seat) => {
            if (!rows[seat.row]) {
                rows[seat.row] = [];
            }
            rows[seat.row].push(seat);
        });
        return rows;
    };

    const rows = groupSeatsByRow();



    return (
        <>
            <Navbar />
            <div className='movie-detail-container'>
                <img className='movie-background' src={backgroundImage} />
                <div className='movie-info'>
                    <p style={{ fontSize: '32px', fontWeight: '600', textTransform: 'uppercase' }}>{movie.title}</p>
                    <p style={{ color: '#AFAFAF', fontSize: '20px', fontWeight: '500' }}>Khởi chiếu ngày <span style={{ fontFamily: 'Montserrat' }}>{movie.releaseDate}</span></p>
                    <div style={{ display: 'flex', fontFamily: 'Montserrat', fontSize: '13px' }}>
                        <Box2d movieFormat={movie.format} />
                    </div>
                    <div className='movie-info-content'>
                        <p><span style={{ color: '#979797' }}>Đạo diễn: </span>{movie.director}</p>
                        <div className='line'></div>
                        <p><span style={{ color: '#979797' }}>Diễn viên: </span>{movie.actors}</p>
                    </div>
                    <div className='movie-info-content2'>
                        <span style={{ color: '#979797' }}>Nội dung:</span>
                        <p>
                            Sau sự kiện Thanos làm cho một nửa vũ trụ tan biến và khiến cho biệt đội Avengers thảm bại, những siêu anh hùng sống sót phải tham gia trận chiến cuối cùng trong Avengers: Endgame - tác phẩm điện ảnh đánh dấu sự khép lại sau 22 bộ phim của Marvel Studios.
                        </p>
                    </div>
                </div>

                <div className='order-container'>
                    <div className='order one'>
                        <div className='order-content'>
                            <div className='places-choice-title'>
                                <p>Chọn chi nhánh</p>
                                <span>Xem trên map</span>
                            </div>
                            <div className='places-choice-box-container' >
                                <div className='places-choice-box' onClick={() => setDropdownStatus(!dropdownStatus)}>
                                    {placeChoice}
                                </div>
                                {
                                    dropdownStatus === true &&
                                    <div className='places-choice-dropdown' >
                                        {
                                            Place.map((item, index) => {
                                                return (
                                                    <div
                                                        className={`places-choice-item ${activeDropdownItem === item.id ? 'activeDropdownItem' : ''}`}
                                                        key={item.id}
                                                        onMouseOver={() => handleOverDropdownItem(item.id)}
                                                        onMouseOut={() => handleOutDropdownItem()}
                                                        onClick={() => handlePlaceClick(item.name)}>
                                                        {item.name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='order-content'>
                            <p>Chọn ngày</p>
                            <div className="calendar-container">
                                <Calendar
                                    onChange={setDate}
                                    value={date}
                                    formatShortWeekday={(locale, date) => [`CN`, `2`, `3`, `4`, `5`, `6`, `7`][date.getDay()]}
                                />
                            </div>
                        </div>
                        <div className='order-content'>
                            <p>Chọn suất chiếu</p>
                            <div className='showtime-container'>
                                <div className='showtime-box'>
                                    08:00
                                </div>
                                <div className='showtime-box'>
                                    10:00
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='order two'>
                        <div className='monitor'>
                            <img src={monitor_image} alt="" />
                            <p>Màn hình</p>
                        </div>
                        <table className="seat-table">

                            <tbody>
                                {Object.keys(rows).map((row) => (
                                    <tr key={row}>
                                        <td>{row}</td>
                                        {rows[row].map((item) => (
                                            <td key={item.id} className="seat-item">
                                                <div
                                                    onClick={() => handleChooseSeat(item.id)}
                                                    style={{
                                                        cursor: item.status === 'booked' ? 'not-allowed' : 'pointer',
                                                    }}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className={item.status === 'free' ? '' : 'booked'}
                                                        style={{
                                                            fill: selectedSeats.includes(item.id) ? '#F30B5E' : '',
                                                            cursor: item.status === 'booked' ? 'not-allowed' : 'pointer',
                                                        }}
                                                    >
                                                        <g>
                                                            <path d="M0,0h24v24H0V0z" fill="none" />
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <path d="M21,9c-1.1,0-2,0.9-2,2v4H5v-4c0-1.1-0.9-2-2-2s-2,0.9-2,2v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.9,22.1,9,21,9z" />
                                                                <path d="M7,11v2h10v-2c0-1.86,1.28-3.41,3-3.86V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v1.14C5.72,7.59,7,9.14,7,11z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </td>
                                        ))}
                                        <td>{row}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <div className='order one'>
                        <div className='order-content'>
                            <div>
                                <p>Thông tin vé</p>
                                <div className='order-info'>
                                    <img src={backgroundImage}></img>
                                    <div className='order-info-container'>
                                        <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>{movie.title}</p>
                                        <div>
                                            <p className='order-info-title'>Chi nhánh</p>
                                            <p className='order-info-content'>{placeChoice}</p>
                                        </div>
                                        <table>

                                            <tr>
                                                <td>
                                                    <p className='order-info-title'>Ngày</p>
                                                    <p className='order-info-content'>{date ? formatDate(date) : ""}</p>
                                                </td>
                                                <td>
                                                    <p className='order-info-title'>Phòng</p>
                                                    <p className='order-info-content'></p>
                                                </td>
                                            </tr>
                                            <tr style={{ marginTop: '12px' }}>
                                                <td>
                                                    <p className='order-info-title'>Xuất chiếu</p>
                                                    <p className='order-info-content'></p>
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <p className='order-info-title'>Chỗ ngồi</p>
                                                    <p className='order-info-content' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                                        {selectedSeats.map((item, index) => {
                                                            return (
                                                                <span style={{ marginLeft: '8px' }}>{item}</span>
                                                            )
                                                        })}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='order-content'>
                            <p>Thông tin thanh toán</p>
                            <div className='voucher-box'>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MovieDetail;