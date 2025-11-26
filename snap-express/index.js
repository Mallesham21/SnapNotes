require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();


app.use(express.json());

connectDB();
app.use('/notes', require('./routes/noteRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});