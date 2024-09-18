var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
    console.log("fetchuser middleware called");
    const token = req.header('auth-token');
    console.log("Received token:", token);
    
    if (!token) {
        console.log("No token provided");
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log("Verified token data:", data);
        req.user = data.user;
        next();
    } catch (error) {
        console.log("Invalid token");
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;
