import React, { useEffect, useState } from 'react';
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
import { getAllMovie } from '../../services/movieService';

export const NowShowing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const data = await getAllMovie();
        setMovies(data.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchMovie();
  }, []);

  return (

    <div className="now-showing">
      <h2 style={{ textAlign: 'left', marginLeft: '10px' }}>Phim Đang Chiếu</h2>
      <div className="movies-scroll">
        {movies.map((movie, index) => (
          <Link className="movie-card" to={`/movie/${movie.id}`} key={movie.id}>
            <div>
              <img src={movie.url_image_title} />
              <div className="movie-info">
                <div className="movie-details">
                  <h3 style={{ textTransform: 'uppercase', fontSize: '16px' }}>{movie.name}</h3>
                  <div className='movie-content'>
                    <span style={{ display: 'flex', fontFamily: 'Montserrat', fontSize: '13px' }}><Box2d movieFormat={movie.genre} /> </span>

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