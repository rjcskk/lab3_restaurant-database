const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/RestaurantRoutes');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/restaurantDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());

// Use routes
app.use('/restaurants', restaurantRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
