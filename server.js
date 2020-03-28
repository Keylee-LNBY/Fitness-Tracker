// Pull in npm packages needed
const mongoose = require('mongoose');
const express = require('express');

//Create PORT used
const PORT = process.env.PORT || 8000;

//Express Set Up Stuff
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Route Stuff
app.use(require('./routes/html-routes'));
app.use(require('./routes/api-routes'));

// Mongoose Stuff
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`Listening on:  http://localhost:${PORT}`);
});