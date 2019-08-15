const express = require('express');
const { Heritage } = require('../model/database');
const { addResStatus, getOnequestion, postQuestions, updateQuestions, deleteQuestion } = require('../controller/heritageController');

const router = express.Router();

router.get('/', getOnequestion)

router.post('/', postQuestions)

router.put('/', updateQuestions)

router.delete('/', deleteQuestion)

module.exports = router;