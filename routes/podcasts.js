const express = require('express');
const router = express.Router();
const { getEpisodes, addEpisodes } = require('../controllers/podcasts');


router
    .route('/')
    .get(getEpisodes)
    .post(addEpisodes);




module.exports = router;

