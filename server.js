const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');


// import env
dotenv.config({ path: './config/config.env' });

// create connection to db
connectDB();

// import router files
const podcast = require('./routes/podcasts');
const episode = require('./routes/episode');


// init app
const app = express();

// body parser middleware
app.use(express.json());
app.use(cors());


// show APIS in dev
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// routes
app.use('/api/v1/episodes', podcast);
app.use('/api/v1/episode', episode);


// check for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')));
    app.use('/robots.txt', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'robots.txt')));
    app.use('/sitemap.xml', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'sitemap.xml')));
}



// run app
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server runnning in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));