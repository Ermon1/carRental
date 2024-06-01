const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/carRental', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
  
};
connectdb()
module.exports = mongoose;
//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