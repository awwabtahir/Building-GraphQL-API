import mongoose from "mongoose";

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/friends", {
    useMongoClient: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    email: {
        type: String
    }
});

const Friends = new mongoose.model("friends", friendSchema);

export { Friends };