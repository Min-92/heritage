const express = require('express');
const { Heritage } = require('../model/database');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const { questions, category, company } = req.body;
        if (!questions || !category || !company) {
            return res.status(400).json({
                code: 400,
                message: 'required parameters'
            })
        }
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

router.delete('/', async (req, res, next) => {
    const { _id } = req.query;
    if (!_id) {
        return res.status(400).json({
            code: 400,
            message: 'required query'
        })
    }   

    await Heritage.findByIdAndUpdate({ _id }, {deleted : true}, (err, question) => {
        if (err) {
            console.err(err);
            return next(err);
        }

        if(!question){
            return res.status(400).json({
                code: 400,
                message: 'invalid id'
            })
        }

        return res.sendStatus(200);
    });
})

module.exports = router;