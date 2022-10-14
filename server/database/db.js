import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.2isxceu.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI);

  mongoose.connection.on('connected', () => {
    console.log('DATABASE CONNECTED');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('DB DISCONNECTED');
  });
  mongoose.connection.on('error', () => {
    console.log('DB ERROR:');
  });
};

export default Connection;
