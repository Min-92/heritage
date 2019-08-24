require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const heritageRouter = require('./routes/heritage');
const examRouter = require('./routes/exam');

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

const app = express();

app.use(logger('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/heritage', heritageRouter);
app.use('/exam', examRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send();
})

mongoose.connect((mongoURI), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true 
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;