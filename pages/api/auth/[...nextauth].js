import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from 'bcrypt'
import User from "../../../config/models/User";
import {Op} from 'sequelize';
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import db from "../../../config/db";


export default (req, res) => NextAuth(req, res, {
    session: {
        maxAge: 30 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                const user = await User.findOne({
                    where: {[Op.or]: [
                            { email: credentials.username },
                            { username: credentials.username}
                        ]}
                });

                if (!user) throw new Error("Incorrect Username or Email")

                const passwordMatch = await compare(credentials.password, user.password);
                console.log(credentials.password, user.password)
                if (!passwordMatch) throw new Error("Incorrect Password")
                return user.toJSON();
            }
        })
    ]
});