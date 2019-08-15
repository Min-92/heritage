const mongoose = require('mongoose');
const db = mongoose.connection;

const heritageSchema = new mongoose.Schema({
    category: { type: String, required: true },
    question: { type: String, required: true },
    company: { type: String, required: true },
    deleted: {type : Boolean, default: false}
}, { timestamps: { createdAt: 'created_at' } })

const Heritage = new mongoose.model('Heritage', heritageSchema);

module.exports = { Heritage };
