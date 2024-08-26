import mongoose from "mongoose";

async function connectDb() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`,
    );
    console.log(`MONGODB connected at ${connectionInstance.connection.host}`);
  } catch (error) {
    throw error;
  }
}

export default connectDb;
