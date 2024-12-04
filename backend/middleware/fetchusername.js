const User = require('../models/User'); // Import the User model

const fetchUserName = async (req, res, next) => {
    console.log("fetchUserName middleware called");

    if (!req.user || !req.user.id) {
        console.log("User ID not found in request");
        return res.status(401).send({ error: "User ID is missing or invalid" });
    }

    try {
        // Fetch the user's name from the database
        const user = await User.findById(req.user.id).select('name'); // Retrieve only the `name` field
        if (!user) {
            console.log("User not found in database");
            return res.status(401).send({ error: "User not authorized" });
        }

        req.user.name = user.name; // Attach the `name` to req.user
        console.log("User name added to req.user:", req.user);
        next();
    } catch (error) {
        console.log("Error fetching user name:", error.message);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = fetchUserName;
