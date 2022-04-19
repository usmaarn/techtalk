import Admin from "@/components/layouts/Admin";
import Post from "../../../config/models/Post";
import CustomLink from "@/components/CustomLink";

export default function Blogs({blogs}) {

    blogs = JSON.parse(blogs);

    return (
        <Admin>
            <div className="flex justify-between items-center">
                <h3 className="text-4xl">Blogs</h3>
                <CustomLink className='px-3 py-2 bg-blue-400 text-white rounded' href='/dashboard/blogs/new'>
                    Create Blog
                </CustomLink>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-10">
                {blogs.map(blog => (
                    <div key={blog} className="flex flex-col gap-1">
                        <div className="w-full h-[250px] bg-gray-200 rounded">
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-semibold text-blue-700">
                                <a className="hover:underline" href={`/blogs/${blog.slug}`}>
                                    {blog.title}
                                </a>
                            </h3>
                        </div>

                    </div>
                ))}
            </div>
        </Admin>
    )
}

export async function getServerSideProps(context) {
    let blogs = await Post.findAll();
    blogs = JSON.stringify(blogs);
    console.log(blogs)
    return {props: {blogs}}
}