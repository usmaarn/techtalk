import db from "config/db";


export default async function handle(req, res){
    let blogs = await db.get('blogs');
    res.send(blogs)
}