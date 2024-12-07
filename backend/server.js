import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import accountRoutes from './routes/account.js'
import movieRoutes from './routes/movie.js'
import billRoutes from './routes/bill.js'
import branchRoutes from './routes/branch.js';
import showtimeRoutes from './routes/showtime.js';
import seatRoutes from './routes/seat.js';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5050;

// Middleware để parse JSON từ body request
app.use(express.json());
app.use(cors());

app.use('/accounts', accountRoutes);
app.use('/movies', movieRoutes);
app.use('/bills', billRoutes);
app.use('/branches', branchRoutes);
app.use('/showtimes', showtimeRoutes);
app.use('/seats', seatRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
