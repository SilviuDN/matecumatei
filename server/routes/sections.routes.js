const express = require('express')
const router = express.Router()

const Section = require('./../models/Section.model')


// router.get('/', (req, res) => {

//     Section
//         .find()
//         .sort({ position: 1 })
//         .then(response => res.json(response))
//         // .then(response => setTimeout(() => res.json(response), 200))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching sections', err }))
// })


router.get('/:section_id', (req, res) => {

    Section
        .findById(req.params.section_id)
        .populate('lectures')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching sections', err }))
})


router.post('/new', (req, res) => {

    const section = req.body

    Section
        .create(section)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving sections', err }))
})


// router.put('/edit/:section_id', (req, res) => {

//     const section = req.body

//     Section
//         .findByIdAndUpdate(req.params.section_id, section)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error editing sections', err }))
// })


module.exports = router