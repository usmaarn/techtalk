import User from "/config/models/User";
import {Op} from 'sequelize'
import {compare} from "bcrypt";
import nextConnect from 'next-connect';
import Session from "../../../config/models/Session";
import {encryptWithSecret} from "next/dist/server/crypto-utils";
let cookieParser = require('cookie-parser');
import Cookies from 'cookies';

const handler = nextConnect({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
});

handler.use(cookieParser());

handler.post(async (req, res) => {

    const cookies = new Cookies(req, res);

    await Session.sync();
    const {username, password} = req.body;
    const user = await User.findOne({
        where: {[Op.or]: {username, email: username}}
    })
    if (!user) return res.status(422).send("Incorrect Username or Email")
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) return res.status(422).send("Incorrect Password");

    const data = {name:user.name, username: user.username, date: new Date().toLocaleString()}

    const session = await Session.build({
        token: encryptWithSecret(user.password, JSON.stringify(data)),
        user: user.username
    })

    cookies.set('access_token', session.token);
    res.send("User Logged In")
})

export default handler;