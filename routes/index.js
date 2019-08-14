const express = require('express');
const { Heritage } = require('../model/database');

const router = express.Router();

const categoryObj = {
    ios: 'ios', front: 'front', back: 'back'
}

router.get('/', async (req, res, next) => {
    res.sendStatus(200);
})

router.get('/:category', async (req, res, next) => {
    const category = req.params.category;
    if (categoryObj[category]) {
        const questions = await Heritage.find({ category });
        return res.send({ questions });
    }
    return next();
})

module.exports = router;