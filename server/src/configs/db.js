import { connect } from "mongoose";

const connectDatabase = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database failed to connect");
    process.exit(1);
  }
};

export default connectDatabase;
