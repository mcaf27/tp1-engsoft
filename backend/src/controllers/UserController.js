const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {

    async cadastro(req, res) {
        const { email, password } = req.body;

        const crypto = require('crypto');

        const secret = process.env.SECRET;
        const hash = crypto.createHmac('SHA256', secret)
            .update(password)
            .digest('base64');

        const user = await User.create({
            email: email,
            password: hash
        });
        return res.json(user);
    },
}