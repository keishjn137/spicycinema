import React from 'react';
import './ComingSoon.css';

// Import hình ảnh
import VenomImage from '../../asset/images/venom.png';
import EliImage from '../../asset/images/eli.png';
import sakaratulImage from '../../asset/images/sakaratul.png';
import ExitImage from '../../asset/images/exit.png';
import BLImage from '../../asset/images/bluelock.png';

const ComingSoon = () => {
  const movies = [
    {
      title: 'Venom',
      trailerUrl: 'https://www.youtube.com/watch?v=xCgggTSN1rU',
      imageUrl: VenomImage,
    },
    {
      title: 'Eli and Ghost Train',
      trailerUrl: 'https://www.youtube.com/watch?v=mYKOQ1QxUac',
      imageUrl: EliImage,
    },
    {
      title: 'Sakaratul Maut ',
      trailerUrl: 'https://www.youtube.com/watch?v=so2K08Prul8',
      imageUrl: sakaratulImage,
    },
    {
      title: 'Exit',
      trailerUrl: 'https://www.youtube.com/watch?v=RaJ5aGF86uk',
      imageUrl: ExitImage,
    },
    {
      title: 'Blue Lock',
      trailerUrl: 'https://www.youtube.com/watch?v=1zm5jMcTlVA',
      imageUrl: BLImage,
    },
  ];

  return (
    <div className="coming-soon">
      <h2>Phim Sắp Chiếu</h2>
      <div className="movies-scroll">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer" className="trailer-button">Xem Trailer</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;