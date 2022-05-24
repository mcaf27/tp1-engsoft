const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {

    async login(req, res) {
        const { email, password } = req.body;

        var crypto = require('crypto')

        const secret = process.env.SECRET;
        const hash = crypto.createHmac('SHA256', secret)
            .update(password)
            .digest('base64');

        const current = await User.findOne({
            where: {
                email: email
            },
        });

        if (hash === current.password) {
            const token = jwt.sign({ UserId: current.id }, process.env.SECRET);
            return res.json({ auth: true, token });
        } else {
            res.status(401).end();
        }
    },

    async verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) return res.status(401).end();
            req.UserId = decoded.UserId;
            next();
        })
    }
}