const express = require('express');
const router = express.Router();
const { getEpisodeDetails } = require('../controllers/podcasts');

router
    .route('/:id')
    .get(getEpisodeDetails); 




module.exports = router;
