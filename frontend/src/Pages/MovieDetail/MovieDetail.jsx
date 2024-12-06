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

const MovieDetail = () => {

    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [activeDropdownItem, setActiveDropdownItem] = useState(null);
    const [placeChoice, setPlaceChoice] = useState('');
    const [date, setDate] = useState(new Date());

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

                    </div>
                    <div className='order one'>
                        <div className='order-content'>
                            <div>
                                <p>Thông tin vé</p>
                                <div className='order-info'>

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