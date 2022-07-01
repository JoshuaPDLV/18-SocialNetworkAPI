

const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');


router.route('/').get(getAllThoughts);


router.route('/:userId').post(createThoughts);


router.route('/:thoughtId/reactions').post(addReaction);


module.exports = router;