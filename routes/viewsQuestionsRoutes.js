const express = require('express');
const viewsControllers = require('../controllers/viewsControllers');

const router = express.Router();

router.get('/btn0/:slug', viewsControllers.getBtn0);
router.get('/btn1/:slug', viewsControllers.getBtn1);
router.get('/btn2/:slug', viewsControllers.getBtn2);
router.get('/btn3/:slug', viewsControllers.getBtn3);
router.get('/btn4/:slug', viewsControllers.getBtn4);

router.get('/responses', viewsControllers.responses);

module.exports = router;
