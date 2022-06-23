const mongoose = require('mongoose')

const AnimalSchema = mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    city: {
        type: String
    },
    price: {
        type: Number
    },
    color: {
        type: String
    },
    favoriteFood: {
        type: String
    }
})

const Animal = module.exports = mongoose.model('Animal', AnimalSchema)

module.exports.addAnimal = function(newAnimal, callback) {
    newAnimal.save(callback)
}