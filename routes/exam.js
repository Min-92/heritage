const express = require('express');
const { Heritage } = require('../model/database');

const router = express.Router();

const limitQuestions = 10;
const categoryObj = {
    ios: 'ios', front: 'front', back: 'back'
}

const getRandomElements = (sourceArray, neededElements) => {
    const result = [];
    for (let i = 0; i < neededElements; i++) {
        const element = sourceArray[Math.floor(Math.random()*sourceArray.length)];
        if(element) result.push(element);
    }
    return result;
}

router.get('/', async (req, res, next) => {
    const categories = []
    for (let value in categoryObj) {
        categories.push(value);
    }
    res.send({ categories });
})

router.get('/:category', async (req, res, next) => {
    const category = req.params.category;
    const deleted = false;
    
    if (categoryObj[category]) {
        const allQuestions = await Heritage.find({category,deleted});
        const questions = getRandomElements(allQuestions,limitQuestions);

        return res.send({questions});
    }
    return next();
})

module.exports = router;