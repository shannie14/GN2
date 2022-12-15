const mongoose = require('mongoose');

const GolfSchema = new mongoose.Schema({
    title: String,
    description: String,
    series: String,
    clip: String,
    tags: String,
    video: String,

})

GolfSchema.index({
    title: 'text',
    description: 'text',
    series: 'text',
    clip: 'text',
    tags: 'text',
    video: 'text',
});

const Golf = mongoose.model('Golf', GolfSchema, 'golf');

//export - use in a different file//
module.exports = Golf;
