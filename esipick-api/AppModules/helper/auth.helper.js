const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.jwtVerify = async (token) => {
    const userData =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return userData;
}