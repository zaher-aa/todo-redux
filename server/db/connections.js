import dotenv from 'dotenv';
import mongoose from 'mongoose';

const {
  env: { DB_URL },
} = process;

try {
  await mongoose.connect(DB_URL);
  console.log('Connected to DB Successfully');
} catch (err) {
  console.log(err);
}

export default mongoose.connection;
