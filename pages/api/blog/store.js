import { getSession } from "next-auth/react"
import Post from "../../../config/models/Post";
import post from "../../../config/models/Post";

export default async function (req, res) {
    const session = await getSession({ req })

    if (!session) return res.status(402).send({
        error: "You must be sign in to view the protected content on this page.",
    })

    await Post.sync()
    const blog = await Post.create({...req.body, slug:req.body.title});

    res.send({
        success: true,
        message: "blogs created successfully!.",
        data: blog.toJSON()
    })
}