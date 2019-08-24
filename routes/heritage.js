const express = require('express');
const { Heritage } = require('../model/database');
const { addResStatus, getOnequestion, postQuestions, putQuestions, deleteQuestion } = require('../controller/heritageController');

const router = express.Router();

router.get('/', getOnequestion)

router.post('/', postQuestions)

router.put('/', putQuestions)

router.delete('/', deleteQuestion)

module.exports = router;