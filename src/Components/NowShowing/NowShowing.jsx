import React from 'react';
import './NowShowing.css';

// Import hình ảnh
import avengerImage from '../../asset/images/avengers.png';
import spidermanImage from '../../asset/images/spiderman.png';
import deadpoolImage from '../../asset/images/deadpool.png';
import nunImage from '../../asset/images/nun.png';
import OPImage from '../../asset/images/red.png';

import Box2d from '../2D/2D';
import { Link } from 'react-router-dom';
import { Movie } from '../../asset/datas/movieData';

export const NowShowing = () => {

  return (

    <div className="now-showing">
      <h2 style={{ textAlign: 'left', marginLeft: '10px' }}>Phim Đang Chiếu</h2>
      <div className="movies-scroll">
        {Movie.map((movie, index) => (
          <Link className="movie-card" to={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <img />
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;