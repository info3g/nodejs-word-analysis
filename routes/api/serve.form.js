const express = require('express');
const router = express.Router();

const formController = require('../../controller/api/formController')

router.get('/sentimental', formController.handleSubmit)

router.post('/sentimental', formController.AfterSubmit)


module.exports = router;