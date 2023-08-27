const mongoose = require('mongoose');
const slugify = require('slugify');

const questionsSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      min: [0, 'Score must be above 0'],
      max: [5, 'Score must be below 5'],
    },
    slug: String,
    title: {
      type: String,
      trim: true,
    },
    btn1: {
      type: String,
      trim: true,
    },
    btn2: {
      type: String,
      trim: true,
    },
    btn3: {
      type: String,
      trim: true,
    },
    btn4: {
      type: String,
      trim: true,
    },
    right: {
      type: String,
      default: false,
      trim: true,
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// DOCUMENT MIDDLEWARE: RUN BEFORE SAVE() AND CREATE()
questionsSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });

  next();
});

const Questions = mongoose.model('Questions', questionsSchema);

module.exports = Questions;
