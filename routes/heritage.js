const express = require('express');
const { Heritage } = require('../model/database');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const { questions, category, company } = req.body;
        for (let i in questions) {
            const heritage = new Heritage({
                question: questions[i],
                category,
                company
            })

            heritage.save();
        }
        return res.sendStatus(200);
    } catch (err) {
        return next(err);
    }

})

module.exports = router;