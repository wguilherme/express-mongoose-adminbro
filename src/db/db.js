import mongoose from "mongoose";

const mongooseDb = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

export default mongooseDb;
