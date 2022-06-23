const express = require('express')
const router = express.Router()
const Animal = require('./models/animal')

router.get('', (req, res) => {
    Animal.find({}, (err, animals) => {
        if (err) console.log(`Animals not received: ${err}`)
        else res.send(animals) 
    })
})

router.post('/create', (req, res) => {
    let newAnimal = new Animal({
        type: req.body.type,
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        price: req.body.price,
        color: req.body.color,
        favoriteFood: req.body.favoriteFood
    })

    Animal.addAnimal(newAnimal, (err, animal) => {
        if (err) console.log(`Animal has not been added: ${err}`)
        else {
            console.log(`Animal has been added`)
            res.send(animal)
        }
    })
})

router.delete('', (req, res) => {
    Animal.remove({_id: req.query.id}, (err, animal) => {
        if (err) console.log(`Animal has not been removed: ${err}`)
        else {
            console.log(`Animal has been removed`)
            res.send(animal)
        }
    })
})

router.put('', (req, res) => {
    Animal.findOneAndUpdate(
        {_id: req.query.id}, 
        {
            type: req.body.type,
            name: req.body.name,
            age: req.body.age,
            city: req.body.city,
            price: req.body.price,
            color: req.body.color,
            favoriteFood: req.body.favoriteFood
        },
        { new: true }, (err, animal) => {
        if (err) console.log(`Animal has not been updated: ${err}`)
        else {
            console.log(`Animal has been updated`)
            res.send(animal)
        }
    })
})

module.exports = router