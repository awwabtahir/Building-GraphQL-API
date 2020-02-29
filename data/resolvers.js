import mongoose from "mongoose";
import { Friends } from "./dbConnectors";

// resolvers maps
const resolvers = {
    Query: {
        getFriend: ({id}) => {
            return new Friend(id, friendDatabase[id]);
        },
    }, 
    Mutation: {
        createFriend: (root, {input}) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                language: input.language,
                email: input.email
            });

            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                });
            });
        },
        updateFriend: (root, { input }) => {
            return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({_id: input.id }, input, { new: true }, (err, friend) => {
                    if (err) reject(err)
                    else resolve(friend)
                });
            });
        }
    },    
};

export { resolvers };