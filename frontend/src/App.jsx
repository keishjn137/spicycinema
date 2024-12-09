import './App.css';
import AdminTicket from './Pages/Admin/AdminTicket';
import AdminUser from './Pages/Admin/AdminUser';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import Payment from './Pages/Payment/Payment';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import AdminMovie from './Pages/Admin/AdminMovie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/ticket" element={<AdminTicket />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/movie" element={<AdminMovie />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
