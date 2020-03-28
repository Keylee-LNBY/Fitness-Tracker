//Pull in the Workout model from the models folder
const { Workout } = require('../models');
const router = require('express').Router();

// POST functionality
router.post('/api/workouts', (request, response) => {
    //console.log('request', response);
    Workout.create({}).then(dbWorkout => {
        response.json(dbWorkout);
    });
});

// GET functionality
router.get('/api/workouts', (request, response) => {
    //console.log('request', response);
    Workout.find().then(dbWorkout => {
        response.json(dbWorkout);
    }).catch(error => {
        console.log(error);
    });
});

router.get('/api/workouts/range', (request, response) => {
    Workout.find().sort({ day: -1}).then(dbWorkout => {
        response.json(dbWorkout);
    }).catch(error => {
        console.log(error);
    });
});

// PUT functionality 
router.put('/api/workouts/:id', (request, response) => {
    Workout.update({ _id: request.params.id }, {$push: {exercises: request.body}}).then(dbWorkout => {
        response.json(dbWorkout);
    });
});

// Make router information accessible 
module.exports = router;
