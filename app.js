const path = require('path');
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorControllers');
const questionRouter = require('./routes/questionsRoutes');
const viewQuestionRouter = require('./routes/viewsQuestionsRoutes');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(`App took: ${date}`);

  next();
});

// MIDDLEWARE
app.use('/', viewQuestionRouter);
app.use('/api/v1/questions', questionRouter);

// ERRORS
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
