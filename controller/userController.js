const { connectToMongo } = require('../Connection/config');



async function getAverageAge(req, res) {
    try {
        const db = await connectToMongo();
        const usersProfileCollection = db.collection('UsersProfile');
        
        const currentDate = new Date();
        const users = await usersProfileCollection.find().toArray();

        const ages = users.map(user => {
            const ageDifMs = currentDate - new Date(user.dob);
            const ageDate = new Date(ageDifMs); 
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        });

        const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;

        res.json({ averageAge });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteUsersAboveAge(req, res) {
    try {
        const ageLimit = 25;
        const db = await connectToMongo();
        const usersCollection = db.collection('Users');
        const usersProfileCollection = db.collection('UsersProfile');

        const currentDate = new Date();
        const users = await usersProfileCollection.find().toArray();

        const usersToDelete = users.filter(user => {
            const ageDifMs = currentDate - new Date(user.dob);
            const ageDate = new Date(ageDifMs); 
            return Math.abs(ageDate.getUTCFullYear() - 1970) > ageLimit;
        });

        const userIdsToDelete = usersToDelete.map(user => user.user_id);

        await usersCollection.deleteMany({ _id: { $in: userIdsToDelete } });
        await usersProfileCollection.deleteMany({ user_id: { $in: userIdsToDelete } });

        res.json({ deletedUsers: usersToDelete });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAverageAge,
    deleteUsersAboveAge
};
