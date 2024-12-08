import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import NowShowing from '../Components/NowShowing/NowShowing';
import ComingSoon from '../Components/ComingSoon/ComingSoon';
import { getAllMovie } from '../services/movieService';


const Home = () => {
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
    <div>
      <Navbar />
      <Banner />
      <NowShowing />
      <ComingSoon />
    </div>
  );
};

export default Home;