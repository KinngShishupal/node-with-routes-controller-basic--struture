const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
} = require('../controllers/tourController');
const router = express.Router();

router.route('/').get(getAllTours).post(createTour);
router.get('/:id', getTour);

module.exports = router;
