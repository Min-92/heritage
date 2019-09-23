const { Heritage } = require('../model/database');

const addResStatus = (res, code, message) => {
    res.status(code).json({ code, message })
}

const getOnequestion = async (req, res, next) => {
    const { _id } = req.query;
    const deleted = false;

    if (!_id) return addResStatus(res, 400, 'required query');

    const question = await Heritage.findOne({ _id, deleted });

    if (!question) return addResStatus(res, 400, 'invalid id');

    return res.send(question);
}

const postQuestions = async (req, res, next) => {
    try {
        const { questions, category, company } = req.body;
        if (!questions || !category || !company) {
            return addResStatus(res, 400, 'required parameters');
        }
        for (let value of questions) {
            const heritage = new Heritage({
                question: value,
                category,
                company
            })

            heritage.save();
        }
        return res.sendStatus(200);
    } catch (err) {
        return next(err);
    }

}

const putQuestions = async (req, res, next) => {
    const { _id } = req.query;
    if (!_id) return addResStatus(res, 400, 'required query');


    const { question, category, company } = req.body;
    if (!question || !category || !company) {
        return addResStatus(res, 400, 'required parameters');
    }

    await Heritage.findByIdAndUpdate({ _id }, { question, category, company }, (err, question) => {
        if (err) {
            console.err(err);
            return next(err);
        }

        if (!question) return addResStatus(res, 400, 'invalid id');

        return res.sendStatus(200);
    });
}

const deleteQuestion = async (req, res, next) => {
    const { _id } = req.query;
    if (!_id) return addResStatus(res, 400, 'required query');

    await Heritage.findByIdAndUpdate({ _id }, { deleted: true }, (err, question) => {
        if (err) {
            console.err(err);
            return next(err);
        }
        if (!question) return addResStatus(res, 400, 'invalid id');

        return res.sendStatus(200);
    });
}

module.exports = {
    addResStatus, getOnequestion, postQuestions, putQuestions, deleteQuestion
}