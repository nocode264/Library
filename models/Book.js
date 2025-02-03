const mongoose = require('mongoose');

const bookSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    author: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    publicationYear: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date().getFullYear()
    },
    genre: {
        type: String,
        required: true,
        enum: ['Fiction', 'Non-Fiction', 'Children\'s','Adults\'s','action',
            'romance', 'horror', 'mystery', 'science fiction', 'biography', 
            'history', 'politics', 'sports', 'tech', 'cooking', 'travel', 
            'religion', 'music', 'art', 'film', 'comics', 'other'
        ]
    },

    desciption: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    
    views: {
        type: Number,
        default: 0
        },
});

module.exports = mongoose.model('Book', bookSchema);