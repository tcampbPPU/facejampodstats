const Episode = require("../models/Episode");

/**
 * @desc     fetch all episodes
 * @route    GET /api/v1/episodes
 * @access   Public
 */
exports.getEpisodes = async (req, res, next) => {
  try {
    const episodes = await Episode.find().sort({ 'average' : 'desc'})

    return res.status(200).json({
      success: true,
      message: "Episodes retrieved successfully.",
      count: episodes.length,
      data: episodes,
    });
  } catch (err) {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(500).json({
      success: false,
      error: messages,
    });
  }
};


/**
 * @desc     fetch episode details
 * @route    GET /api/v1/episode/:id
 * @access   Public
 */
exports.getEpisodeDetails = async (req, res, next) => {
  try {
    const episodeNumber = req.params.id;
    const episode = await Episode.find({"episodeNumber": episodeNumber});

    // If not found
    if (!episode.length) {
      return res.status(404).json({
        success: false,
        message: "Episode number was not found.",
      });      
    }

    return res.status(200).json({
      success: true,
      message: "Episode details retrieved successfully.",
      data: episode,
    });
  } catch (err) {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(500).json({
      success: false,
      error: messages,
    });
  }
};



/**
 * @desc     add a episode
 * @route    POST /api/v1/episodes
 * @access   Private, must have login access
 */
exports.addEpisodes = async (req, res, next) => {
  try {
    const { michaelScore, jordanScore } = req.body;

    const average = (parseInt(michaelScore) + parseInt(jordanScore)) / 2;
    
    req.body.average = average;
    
    const episode = await Episode.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Episode was created.",
      data: episode,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error.",
      });
    }
  }
};
