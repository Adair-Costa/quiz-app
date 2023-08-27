const Questions = require('../models/questionsModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');

// HANDLERS CONTROLLERS
exports.getAllQuestions = catchAsync(async (req, res, next) => {
  // EXECUTE QUERY
  const features = new APIFeatures(Questions.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const allQuestions = await features.query;

  res.status(200).json({
    status: 'success',
    quantity: allQuestions.length,
    data: {
      question: allQuestions,
    },
  });
});

exports.getOneQuestion = catchAsync(async (req, res, next) => {
  const oneQuestion = await Questions.findById(req.params.id);

  if (!oneQuestion) {
    return next(new AppError('No question found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      question: oneQuestion,
    },
  });
});

exports.createNewQuestion = catchAsync(async (req, res, next) => {
  const newQuestion = await Questions.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      question: newQuestion,
    },
  }); 
});

exports.updateQuestion = catchAsync(async (req, res, next) => {
  const updateQuestion = await Questions.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updateQuestion) {
    return next(new AppError('No question found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      question: updateQuestion,
    },
  });
});

exports.deleteQuestion = catchAsync(async (req, res, next) => {
  const question = await Questions.findByIdAndDelete(req.params.id);

  if (!question) {
    return next(new AppError('No question found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    message: null,
  });
});