import React from 'react';
import './NowShowing.css';

// Import hình ảnh
import avengerImage from '../../asset/images/avengers.png';
import spidermanImage from '../../asset/images/spiderman.png';
import deadpoolImage from '../../asset/images/deadpool.png';
import nunImage from '../../asset/images/nun.png';
import OPImage from '../../asset/images/red.png';

import Box2d from '../2D/2D';

const NowShowing = () => {
  const movies = [
    {
      title: 'Avengers End Game',
      subtitle: 'End Game',
      releaseDate: '26/4/2019',
      imageUrl: avengerImage,
      format: '2D',
      subtitle: 'Phụ đề'
    },
    {
      title: 'Spider-Man',
      subtitle: 'Far From Home',
      releaseDate: '15/7/2019',
      imageUrl: spidermanImage,
      format: '2D',
      subtitle: 'Phụ đề'
    },
    {
      title: 'Deadpool & Wolverine',
      subtitle: 'Mutant Reunion',
      releaseDate: '10/2/2024',
      imageUrl: deadpoolImage,
      format: '2D',
      subtitle: 'Phụ đề'
    },
    {
      title: 'The Nun',
      subtitle: 'The Conjuring Universe',
      releaseDate: '7/9/2018',
      imageUrl: nunImage,
      format: '2D',
      subtitle: 'Phụ đề'
    },
    {
      title: 'One Piece: Red',
      subtitle: 'One Piece',
      releaseDate: '7/9/2018',
      imageUrl: OPImage,
      format: '2D',
      subtitle: 'Phụ đề'
    },
  ];

  return (

    <div className="now-showing">
      <h2 style={{ textAlign: 'left', marginLeft: '10px' }}>Phim Đang Chiếu</h2>
      <div className="movies-scroll">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
              <div className="movie-details">
                <h3 style={{ textTransform: 'uppercase', fontSize: '16px' }}>{movie.title}</h3>
                <div className='movie-content'>
                  <span style={{ display: 'flex', fontFamily: 'Montserrat', fontSize: '13px' }}><Box2d movieFormat={movie.format} /> </span>
                  <button className="ticket-button">Đặt vé</button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;