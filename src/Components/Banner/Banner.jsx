import React, { useState } from 'react';
import './Banner.css';

// Import hình ảnh
import avengerImage from '../../asset/images/avengers.png';
import spidermanImage from '../../asset/images/spiderman.png';
import deadpoolImage from '../../asset/images/deadpool.png';
import nunImage from '../../asset/images/nun.png';
import OPImage from '../../asset/images/red.png';
const Banner = () => {
  const movies = [
    {
      title: 'Avengers',
      subtitle: 'End Game',
      releaseDate: '26/4/2019',
      imageUrl: avengerImage,
    },
    {
      title: 'Spider-Man',
      subtitle: 'Far From Home',
      releaseDate: '15/7/2019',
      imageUrl: spidermanImage,
    },
    {
      title: 'Deadpool & Wolverine',
      subtitle: 'Mutant Reunion',
      releaseDate: '10/2/2024',
      imageUrl: deadpoolImage,
    },
    {
      title: 'The Nun',
      subtitle: 'The Conjuring Universe',
      releaseDate: '7/9/2018',
      imageUrl: nunImage,
    },

    {
      title: 'One Piece: Red',
      subtitle: 'One Piece',
      releaseDate: '7/9/2018',
      imageUrl: OPImage,
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${selectedMovie.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

      }}
    >
      <div style={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: '0.6'
      }}>

      </div>
      <div className="banner-left">
        <h1 style={{ margin: '0', fontSize: '56px', textTransform: 'uppercase', fontWeight: '800' }}>{selectedMovie.title}</h1>
        <h2 style={{ margin: '0', fontSize: '36px', textTransform: 'uppercase', fontWeight: '500' }}>{selectedMovie.subtitle}</h2>
        <p style={{ marginTop: '36px', fontSize: '14px', textTransform: 'uppercase', fontWeight: '700' }} className='banner-premiere'>KHỞI CHIẾU TẠI RẠP</p>
        <h3 className='day-movie'>{selectedMovie.releaseDate}</h3>
        <div className="banner-buttons">
          <button className="details-button">Xem chi tiết</button>
          <button className="ticket-button">Đặt vé ngay</button>
        </div>
      </div>
      <div className="banner-right">
        <div className="movies-scroll">
          {movies.map((movie, index) => (
            <div
              key={index}
              className={`movie-slide ${selectedMovie.title === movie.title ? 'active' : ''}`}
              onClick={() => setSelectedMovie(movie)}
            >
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;