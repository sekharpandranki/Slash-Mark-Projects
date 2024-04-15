const express = require('express');
const connectDB = require('./config/db');
const chalk = require('chalk'); // Import chalk library

const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => {
  // Print colorful message when the server is running
  console.log(chalk.green(`Server running on port ${PORT}`));
});
