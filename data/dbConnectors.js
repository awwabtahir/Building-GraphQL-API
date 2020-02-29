import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/friends", {
    useNewUrlParser: true
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

// SQL
const sequelize = new Sequelize("database", null, null, {
    dialect: "sqlite",
    storage: "./aliens.sqlite",
});

const Aliens = sequelize.define("aliens", {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING },
});

Aliens.sync({force: true}).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
            planet: casual.word
        });
    });
});

const Friends = new mongoose.model("friends", friendSchema);

export { Friends, Aliens };