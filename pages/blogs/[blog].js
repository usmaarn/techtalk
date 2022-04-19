import Main from "@/components/layouts/Main";
import Post from "../../config/models/Post";
import renderHtml from 'react-render-html';
import {marked} from "marked";
import styles from '/styles/blog/Show.module.scss';

export default function Blog({blog}){

    blog = JSON.parse(blog)

    return (
        <Main className="p-5">
            <div className={styles.blog}>
                <div className="w-full h-[300px] md:h-[500px] bg-gray-200 rounded">
                </div>
                <div className="px-2">
                    <h3 className="text-3xl md:text-5xl mt-5 font-semibold text-blue-700">
                        <a className="hover:underline" href={`/blogs/${blog.slug}`}>
                            {blog.title}
                        </a>
                    </h3>

                    <div className={styles.content}>
                        {renderHtml(marked.parse(blog.body))}
                    </div>
                </div>

            </div>
        </Main>
    )
}

export async function getServerSideProps(context) {
    const slug = context.params.blog;
    const blog = await Post.findOne({where:{slug}})
    return {props: {blog: JSON.stringify(blog)}}
}