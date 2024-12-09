import React, { useEffect, useState } from 'react';
import './Banner.css';

// Import hình ảnh
import avengerImage from '../../asset/images/avengers.png';
import spidermanImage from '../../asset/images/spiderman.png';
import deadpoolImage from '../../asset/images/deadpool.png';
import nunImage from '../../asset/images/nun.png';
import OPImage from '../../asset/images/red.png';
import { getAllMovie } from '../../services/movieService';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieList = await getAllMovie();
        setMovies(movieList.data);
        if (movieList.data.length > 0) {
          setSelectedMovie(movieList.data[0]);
        }
      } catch (error) {
        console.error('Lỗi khi tải danh sách phim:', error);
      }
    };

    fetchMovies();
  }, []);


  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${selectedMovie.url_image_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
          position: 'absolute',
          opacity: '0.6',
        }}
      ></div>
      <div className="banner-left">
        <h1 style={{ margin: '0', fontSize: '56px', textTransform: 'uppercase', fontWeight: '800' }}>
          {selectedMovie.name}
        </h1>
        <p
          style={{ marginTop: '36px', fontSize: '14px', textTransform: 'uppercase', fontWeight: '700' }}
          className="banner-premiere"
        >
          KHỞI CHIẾU TẠI RẠP
        </p>
        <div className="banner-buttons">
          <Link style={{ textDecoration: 'none' }} to={`/movie/${selectedMovie.id}`} className="details-button">Xem chi tiết</Link>
          <Link style={{ textDecoration: 'none' }} to={`/movie/${selectedMovie.id}`} className="ticket-button">Đặt vé ngay</Link>
        </div>
      </div>
      <div className="banner-right">
        <div className="movies-scroll">
          {movies.map((movie, index) => (
            <div
              key={index}
              className={`movie-slide ${selectedMovie.name === movie.name ? 'active' : ''
                }`}
              onClick={() => setSelectedMovie(movie)}
            >
              <img src={movie.url_image_banner} alt={movie.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
