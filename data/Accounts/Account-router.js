const express = require('express')

const db = require('../dbConfig.js')

const router = express.Router()

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.json(error)
    })
})

router.post('/:id', (req, res) => {
    const accountData = req.body
    db('accounts')
    .insert(accountData, 'id')
    .then(([id]) => {
        res.status(200).json(id)
    })
    .catch(error => {
        res.json(error)
    })
})

router.put('/:id', (req, res) => {
    const change = req.body
    db('accounts').where('id', req.params.id).update(changes)
    .then(count => {
        res.status(200).json({message: `updated ${count} records`})
    })
    .catch(error => {
        res.json(error)
    })
})

router.delete('/:id', (req, res) => {
    db('accounts').where({ id: req.params.id}).del()
    .then(count => {
        res.status(200).json({message: `deleted ${count} records`})
    })
    .catch(error => {
        res.json(error)
    })
})