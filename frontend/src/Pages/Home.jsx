import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import NowShowing from '../Components/NowShowing/NowShowing';
import ComingSoon from '../Components/ComingSoon/ComingSoon';


const Home = () => {
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