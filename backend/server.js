import express from 'express';
import dotenv from 'dotenv';

import accountRoutes from './routes/account.js'
import movieRoutes from './routes/movie.js'
import billRoutes from './routes/bill.js'

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5050;

// Middleware để parse JSON từ body request
app.use(express.json());

app.use('/accounts', accountRoutes);
app.use('/movies', movieRoutes);
app.use('/bills', billRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
