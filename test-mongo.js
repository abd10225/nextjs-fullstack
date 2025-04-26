require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log('Connecting to MongoDB...');
    console.log('Connection string:', process.env.MONGO);
    
    await mongoose.connect(process.env.MONGO);
    
    console.log('Connected successfully to MongoDB!');
    
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

testConnection();
