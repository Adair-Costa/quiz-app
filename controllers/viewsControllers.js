const Question = require('../models/questionsModel');
const catchAsync = require('../utils/catchAsync');

exports.getBtn0 = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('btn0', {
    title: 'welcome',
    questions,
  });
});

exports.getBtn1 = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('btn1', {
    title: 'btn1',
    questions,
  });
});

exports.getBtn2 = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('btn2', {
    title: 'btn2',
    questions,
  });
});

exports.getBtn3 = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('btn3', {
    title: 'btn3',
    questions,
  });
});

exports.getBtn4 = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('btn4', {
    title: 'btn4',
    questions,
  });
});

exports.responses = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  res.status(200).render('responses', {
    title: 'responses',
    questions,
  });
});