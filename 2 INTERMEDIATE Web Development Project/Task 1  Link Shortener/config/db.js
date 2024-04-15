const mongoose = require('mongoose');
const config = require('config');
const chalk = require('chalk'); // Import chalk library
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });

    console.log(chalk.blue('MongoDB Connected...')); // Colorful MongoDB connection message
  } catch (err) {
    console.error(chalk.red(err.message)); // Colorful error message
    process.exit(1);
  }
};

module.exports = connectDB;
