

const { connectToMongo, createCollections, encryptPassword } = require('./config');

async function insert() {
    try {
        const db = await connectToMongo();
        await createCollections(db);

        const usersCollection = db.collection('Users');
        const usersProfileCollection = db.collection('UsersProfile');

        // Iinserting into Users
        const hashedPassword = encryptPassword('Aman123');
        await usersCollection.insertOne({
            firstName: 'Harsh',
            lastName: 'Jha',
            email: 'harsh@gmail.com',
            password: hashedPassword
        });
        console.log("Data inserted into Users collection.");

        // Inserting into UsersProfile collection

        await usersProfileCollection.insertOne({
            user_id: 3, 
            dob: '05-05-1995',
            Mobile_no: '9087654323'
        });
        console.log("Data inserted into UsersProfile collection.");
        console.log("MongoDB connection closed.");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

insert();


// ==========updated Code =======

// const connectToMongo = require('./config');
// async function insert(){
//     try{
//         const db = await connectToMongo();
//         console.log("Database is connected Successfully")
//     }catch(error){
//         console.error("Connection to database is not established",error);
//     }
// }

// insert();