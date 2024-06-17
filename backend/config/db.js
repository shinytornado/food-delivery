import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shashank:shashank@cluster0.8vxzht6.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}    