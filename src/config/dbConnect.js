import mongoose from "mongoose";

mongoose.connect('mongodb+srv://vinin90:123456@cluster0.65s94.mongodb.net/vini-node')

let db = mongoose.connection;

export default db;