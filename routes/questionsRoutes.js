const express = require('express');
const questionsControllers = require('../controllers/questionsControllers');

// ROUTES
const router = express.Router();

router
  .route('/')
  .get(questionsControllers.getAllQuestions)
  .post(questionsControllers.createNewQuestion);

router
  .route('/:id')
  .get(questionsControllers.getOneQuestion)
  .patch(questionsControllers.updateQuestion)
  .delete(questionsControllers.deleteQuestion);

module.exports = router;
