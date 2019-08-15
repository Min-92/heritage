const express = require('express');
const { Heritage } = require('../model/database');
const { getRandomElements, getCategoryArray, categoryObj } = require('../controller/');

const router = express.Router();

const limitQuestions = 10;

router.get('/', async (req, res, next) => {
    const categories = getCategoryArray();
    res.send({ categories });
})

router.get('/:category', async (req, res, next) => {
    const category = req.params.category;
    const deleted = false;

    if (categoryObj[category]) {
        const allQuestions = await Heritage.find({ category, deleted });
        const questions = getRandomElements(allQuestions, limitQuestions);

        return res.send({ questions });
    }
    return next();
})

module.exports = router;