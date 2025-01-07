require('dotenv').config();
const express = require('express');
const connectDB =require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

//connect to MongoDB
connectDB();

//middleware
app.use(express.json());

//routes
app.use('/api/books', require('./routes/bookRoute'));

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));