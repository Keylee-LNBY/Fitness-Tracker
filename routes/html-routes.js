//Required npms to get routes to work
const path = require("path");
const router = require("express").Router();

//Set up the exersise and stats routes
router.get('/exercise', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/stats.html'));
});

// Make the routes accessable to other pages
module.exports = router;
