import Heading from "@/components/index/Heading";
import WhatWeDo from "@/components/index/WhatWeDo";
import Blogs from "@/components/index/Blogs";
import NewsLetter from "@/components/index/NewsLetter";
import Main from "@/components/layouts/Main";
import Post from "../config/models/Post";
import {useSession} from "../config/sessionContext";


export default function Index({blogs}){
    const session = useSession();
    blogs = JSON.parse(blogs)

  return(
    <Main title="Home Page">
        <Heading />
        <WhatWeDo />
        <Blogs blogs={blogs} />
        <NewsLetter />
    </Main>
  )
}

export async function getServerSideProps(context){
    const blogs = await Post.findAll();
    return {props: {blogs: JSON.stringify(blogs)}}
}