import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import backgroundImage from '../../asset/images/avengers.png'
import './MovieDetail.css'
import Box2d from '../../Components/2D/2D';
import { useNavigate, useParams } from 'react-router-dom';
import { Movie } from '../../asset/datas/movieData';
import { Place } from '../../asset/datas/placesData';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import { Seat } from '../../asset/datas/seatData';
import monitor_image from '../../asset/images/monitor.png'
import { getAllMovieById } from '../../services/movieService';
import { getAllBranch } from '../../services/branchService';
import { getAllShowtime } from '../../services/showtimeService';
import { getAllSeat } from '../../services/seatService';

const MovieDetail = () => {
    const navigate = useNavigate();

    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [activeDropdownItem, setActiveDropdownItem] = useState(null);
    const [branch, setBranch] = useState([]);
    const [showtimes, setShowtime] = useState([]);
    const [placeChoice, setPlaceChoice] = useState('');
    const [date, setDate] = useState(new Date());
    const [dateChoice, setDateChoice] = useState();
    const [filteredShowtimesPlace, setFilteredShowtimesPlace] = useState([]);
    const [filteredShowtimes, setFilteredShowtimes] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showTimeChoice, setShowTimeChoice] = useState();
    const [selectedSeatsName, setSelectedSeatsName] = useState([]);
    const [seat, setSeat] = useState([]);

    const showTime = filteredShowtimes.find((st) => st.id == showTimeChoice)
    const [movie, setMovie] = useState();


    const { id } = useParams();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getAllMovieById(id);
                setMovie(data.data);
            } catch (err) {
                console.log(err)
            }

        };

        const fetchBranch = async () => {
            try {
                const data = await getAllBranch();
                setBranch(data.data);
            } catch (err) {
                console.log(err)
            }
        }




        fetchMovie();
        fetchBranch();
    }, []);

    useEffect(() => {
        if (selectedSeats.length > 0) {

            const seatNames = [];
            selectedSeats.forEach((item) => {
                seatNames.push(convertSeatName(item))
            });

            setSelectedSeatsName(seatNames);
        }
    }, [selectedSeats]);

    const convertSeatName = (id) => {
        const seatData = seat.find((seat) => seat.id === id);
        return `${seatData.seat}`
    }


    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${day}:${month}`;
    };

    function formatDateHour(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(-2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}:${month}:${day} ${hours}:${minutes}`;
    }

    const convertToHHMM = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const convertToDDMM = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        return `${day}:${month}`;
    };

    const handleOverDropdownItem = (placeId) => {
        setActiveDropdownItem(placeId);
    }

    const handleOutDropdownItem = () => {
        setActiveDropdownItem(null);
    }

    const handlePlaceClick = (placeName, placeId) => {
        setDropdownStatus(false);
        setPlaceChoice(placeName);
        setFilteredShowtimesPlace([])
        setFilteredShowtimes([])
        setShowTimeChoice()
        setDateChoice()
        loadShowtimesPlace(placeId);
        setSelectedSeats([]);
    }

    const loadShowtimesPlace = async (idBranch) => {
        try {
            const data = await getAllShowtime(idBranch, id);
            const filteredData = data.data
                .sort((a, b) => new Date(a.showtime) - new Date(b.showtime));
            setFilteredShowtimesPlace(filteredData);
        } catch (err) {
            console.log(err)
        }
    }

    const loadShowtimes = (date) => {
        setSelectedSeats([]);
        const filteredData = filteredShowtimesPlace.filter(
            (st) => convertToDDMM(st.showtime) == formatDate(date)
        );
        console.log(formatDate(date))

        setFilteredShowtimes(filteredData)

    }

    const handleChooseDate = () => {
        setDateChoice(date);
        loadShowtimes(date)
    }

    const handleChooseSeat = (seatId) => {
        const selectedSeat = seat.find((seat) => seat.id === seatId);
        if (selectedSeat && selectedSeat.status === false) {
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
        seat.forEach((seat) => {
            if (!rows[seat.row]) {
                rows[seat.row] = [];
            }
            rows[seat.row].push(seat);
        });
        return rows;
    };

    const loadSeat = async (idShowtime) => {
        try {
            const data = await getAllSeat(idShowtime);
            setSeat(data.data)

        } catch (err) {
            console.log(err)
        }
    }


    const handleChooseShowtime = (id) => {
        setShowTimeChoice(id)
        loadSeat(id)
        setSelectedSeats([]);
    }

    const rows = groupSeatsByRow();

    const handlePaymentClick = () => {
        if (selectedSeats.length != 0) {
            const data = { showTime, selectedSeatsName, movie, placeChoice };
            navigate('/payment', { state: data })
        }
    }


    return (
        <>
            <Navbar />
            {
                movie &&
                <div className='movie-detail-container'>
                    <img className='movie-background' src={movie.url_image_banner} />
                    <div className='movie-info'>
                        <p style={{ fontSize: '32px', fontWeight: '600', textTransform: 'uppercase' }}>{movie.name}</p>
                        <p style={{ color: '#AFAFAF', fontSize: '20px', fontWeight: '500' }}>Khởi chiếu ngày <span style={{ fontFamily: 'Montserrat' }}>{movie.releaseDate}</span></p>
                        <div style={{ display: 'flex', fontFamily: 'Montserrat', fontSize: '13px' }}>
                            <Box2d movieFormat={movie.genre} />
                        </div>
                        <div className='movie-info-content'>
                            <p><span style={{ color: '#979797' }}>Đạo diễn: </span>{movie.directors}</p>
                            <div className='line'></div>
                            <p><span style={{ color: '#979797' }}>Diễn viên: </span>{movie.actors}</p>
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
                                                branch && branch.map((item, index) => {
                                                    return (
                                                        <div
                                                            className={`places-choice-item ${activeDropdownItem === item.id ? 'activeDropdownItem' : ''}`}
                                                            key={item.id}
                                                            onMouseOver={() => handleOverDropdownItem(item.id)}
                                                            onMouseOut={() => handleOutDropdownItem()}
                                                            onClick={() => handlePlaceClick(item.name, item.id)}>
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
                                <div className='places-choice-title'>
                                    <p>Chọn ngày</p>
                                    <span
                                        onClick={() => { handleChooseDate() }}
                                        style={{ cursor: 'pointer', color: "white", textDecoration: 'none', padding: '8px 12px', backgroundColor: '#FB9815', borderRadius: '8px' }}>Xác nhận</span>
                                </div>
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
                                    {
                                        filteredShowtimes.map((item, index) => {
                                            return (
                                                <div className={`showtime-box ${showTimeChoice === item.id ? 'showTimeActive' : ''} `}
                                                    key={item.id}
                                                    onClick={() => handleChooseShowtime(item.id)}>
                                                    {convertToHHMM(item.showtime)}
                                                </div>
                                            )
                                        })
                                    }
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
                                                            cursor: item.status === true ? 'not-allowed' : 'pointer',
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            className={item.status === false ? '' : 'booked'}
                                                            style={{
                                                                fill: selectedSeats.includes(item.id) ? '#F30B5E' : '',
                                                                cursor: item.status === true ? 'not-allowed' : 'pointer',
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
                                                        <p className='order-info-content'>{dateChoice ? formatDate(dateChoice) : ""}</p>
                                                    </td>

                                                </tr>
                                                <tr style={{ marginTop: '12px' }}>
                                                    <td>
                                                        <p className='order-info-title'>Xuất chiếu</p>
                                                        {
                                                            showTime
                                                                ? <p className='order-info-content'>{formatDateHour(showTime.showtime)}</p>
                                                                : <p className='order-info-content'></p>
                                                        }
                                                    </td>
                                                    <td style={{ textAlign: 'right' }}>
                                                        <p className='order-info-title'>Chỗ ngồi</p>
                                                        <p className='order-info-content' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                                            {selectedSeats.map((item, index) => {
                                                                return (
                                                                    <span style={{ marginLeft: '8px' }}>{convertSeatName(item)}</span>
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
                            <div
                                onClick={() => { handlePaymentClick() }}
                                className='order-content' style={{ textAlign: 'center', backgroundColor: '#6B68FC', cursor: 'pointer' }}>
                                <p>Thanh toán</p>
                            </div>
                        </div>

                    </div>
                </div >
            }
        </>
    );
};

export default MovieDetail;