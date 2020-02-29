import mongoose from "mongoose";
import friends, { Friends } from "./dbConnectors";

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
                newFriend.save((err) => {
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })
        }
    },    
};

export default resolvers;