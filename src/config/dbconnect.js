///mongodb+srv://suellen:290102@library.llzqb6v.mongodb.net/?retryWrites=true&w=majority&appName=library

import mongoose, { mongo } from 'mongoose'

async function databaseConnection(){
    mongoose.connect(process.env.CONNECTION_STR);

    return mongoose.connection;
};

export default databaseConnection;
