const express = require('express')
const router = express.Router()

const ThoughtController = require('../controller/ThoughtController')
const { imageUpload } = require('../helpers/image-upload')

router.patch('/edit/:id', imageUpload.single('image'), ThoughtController.update)
router.get('/:id', ThoughtController.getUpdate)
router.delete('/delete/:id', ThoughtController.delete)
router.post('/register', imageUpload.single('image'), ThoughtController.register)
router.get('/search/:key', ThoughtController.search)
router.get('/', ThoughtController.getAll)

module.exports = router
