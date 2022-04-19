import db from "../../../utils/db";

export default function single(req, res){
    db.getSingle("blogs", req.body)
        .then((blog) => res.json(blog))
}