import Heading from "@/components/index/Heading";
import WhatWeDo from "@/components/index/WhatWeDo";
import Blogs from "@/components/index/Blogs";
import NewsLetter from "@/components/index/NewsLetter";
import Main from "@/components/layouts/Main";

export default function index(){
  return(
    <Main title="Home Page">
        <Heading />
        <WhatWeDo />
        <Blogs />
        <NewsLetter />
    </Main>
  )
}