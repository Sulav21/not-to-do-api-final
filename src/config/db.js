import mongoose from "mongoose";

const mongoClient = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/classA");
    if(conn){
        console.log('MongoDB is connected')
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient