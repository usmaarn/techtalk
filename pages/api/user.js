import {getSession} from "next-auth/react";
import User from "../../config/models/User";

export default async function handle(req, res){
    let session = await getSession({req});
    let user = await User.findOne({where:{email:session.user.email}});
    console.log(user)
    res.send(user.toJSON());
}