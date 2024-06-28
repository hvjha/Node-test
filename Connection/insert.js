
const { connectToMongo, createCollections, encryptPassword } = require('./config');
const { ObjectId } = require('mongodb');

const usersData = [
    { firstName: 'Harsh', lastName: 'Jha', email: 'hv@gmail.com', password: 'password1', dob: '1990-01-01', mobile_no: '1234567890' },
    { firstName: 'Aman', lastName: 'Jha', email: 'jane@gmail.com', password: 'password2', dob: '1995-05-05', mobile_no: '0987654321' },
    { firstName: 'Ankit', lastName: 'Jha', email: 'ankit@egmail.com', password: 'password3', dob: '2000-10-10', mobile_no: '1231231231' },
    { firstName: 'Aditya', lastName: 'Kumar', email: 'addy@egmail.com', password: 'password4', dob: '1985-12-12', mobile_no: '3213213213' },
    { firstName: 'Keshav', lastName: 'Jha', email: 'kj@egmail.com', password: 'password5', dob: '1992-07-07', mobile_no: '4564564564' }
];

async function insert() {
    try {
        const db = await connectToMongo();
        await createCollections(db);

        const usersCollection = db.collection('Users');
        const usersProfileCollection = db.collection('UsersProfile');

        for (const user of usersData) {
            const hashedPassword = encryptPassword(user.password);
            const userInsertResult = await usersCollection.insertOne({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: hashedPassword
            });
            await usersProfileCollection.insertOne({
                user_id: userInsertResult.insertedId,
                dob: new Date(user.dob),
                mobile_no: user.mobile_no
            });
        }

        console.log("Data inserted into Users and UsersProfile collections.");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

insert();



