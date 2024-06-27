
const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const url = 'mongodb://localhost:27017';
const dbName = 'Node';

const client = new MongoClient(url);

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

async function createCollections(db) {
    try {
        await db.createCollection('Users');
        await db.createCollection('UsersProfile');
        console.log("Collections created successfully.");
    } catch (error) {
        console.error("Error creating collections:", error);
        throw error;
    }
}

function encryptPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex');
}

module.exports = {
    connectToMongo,
    createCollections,
    encryptPassword
};


// ==========Updated Code==========

// const {MongoClient} = require('mongodb');
// const md5 = require('md5');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'Node'
// async function connectToMongo(){
//     await client.connect();
//     console.log("database is connected to MongoDB")
//     const db = client.db(dbName);
//     return db;
// }

// module.exports = connectToMongo;
