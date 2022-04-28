import User from "/config/models/User";
import {hash} from "bcrypt";

export default async function register(req, res) {
    try {
        await User.sync();
        const password = await hash(req.body.password, 10);
        const user  = await User.create({...req.body, password});
        res.send(user);
    }catch (e) {
        res.status(422).json(e)
    }

}