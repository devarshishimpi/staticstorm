const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
// const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const fetchuser = require('../middleware/fetchuser');
const axios = require('axios');
const qs = require('querystring');

const JWT_SECRET = "AbhiIsASexyFuckin*GoodB$oy";









router.post('/', async (req, res) => {
    axios.get(
        'https://api.github.com/user',
        {
            headers: {
                'Authorization': `Token ${req.body.accessToken}`
            }
        }
    ).then(async response => {
        // res.json(response.data);
        const theUser = await UserSchema.findOne({ githubId: response.data.id });
        if (!theUser) {
            // Create new account here!!
            const newUser = await UserSchema.create({
                name: response.data.name,
                githubId: response.data.id,
                githubLogin: response.data.login
            });

            return res.status(200).json({ success: true });
        }
        else {
            // Logged in Successfully Here
            return res.status(200).json({ success: true });
        }
    })
    .catch(error => {
        console.error(error);
        res.json({ success: false });
    });
});




























router.get('/github', (req, res) => {
    const code = req.query.code;
    const clientId = '636a2eda665f3bc395b4';
    const clientSecret = '0836b515ce94fb7333ea914a4f7bb0136bf4a19b';

    axios.post(
        'https://github.com/login/oauth/access_token',
        qs.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        }),
        {
            headers: {
            Accept: 'application/json'
            }
        }
    ).then(response => {
        const accessToken = response.data.access_token;
        return res.redirect(`http://staticstorm.coderush.tech/verifyLogin?access_token=${accessToken}`);
    })
    .catch(error => {
        console.error(error);
        res.send('An error occurred');
    });
});


module.exports = router;
