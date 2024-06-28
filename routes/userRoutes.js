const express = require('express');
const { getAverageAge, deleteUsersAboveAge } = require('../controller/userController');
const router = express.Router();

router.get('/average-age', getAverageAge);
router.delete('/delete-users-above-age', deleteUsersAboveAge);

module.exports = router;
