import mongoose from "mongoose";
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_LINK)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB', err))