const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// import env
dotenv.config({ path: './config/config.env' });

// create connection to db
// connectDB();

// import router files
// const transaction = require('./routes/transactions');

// init app
const app = express();

// body parser middleware
app.use(express.json());

// 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// routes
// app.use('/api/v1/transactions', transaction);

// check for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')));
}



// run app
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runnning in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));