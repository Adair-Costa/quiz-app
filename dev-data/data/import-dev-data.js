const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Questions = require('../../models/questionsModel');

dotenv.config({ path: './config.env' });

// DATABASE CONNECTION
const DB = process.env.DATABASE.replace(
  'Pced2CjSZGvkvTrx',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/simple-questions.json`, 'utf-8'),
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Questions.create(questions);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

// IMPORT DATA INTO DB
const deleteData = async () => {
  try {
    await Questions.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
