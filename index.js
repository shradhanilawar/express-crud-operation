const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
