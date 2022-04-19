import Layout from "@/components/dahboard/Admin";
import Editor from "@/components/Editor";
import {useState} from "react";

export default function Edit(){

    const [blog, setBlog] = useState({
        title: '',
        body: '',
        tags: '',
    })

    const handleChange = e => setBlog({...blog, [e.target.name]: e.target.value})

    return (
        <Layout heading='Edit Blog'>
            <form action="" className='flex flex-col gap-5 max-w-[800px] mt-10'>

                <div className="">
                    <label className='text-lg block mb-2'>Blog Title</label>
                    <textarea onChange={handleChange} name='title'  value={blog.title}
                              className='shadow w-full px-3 py-2 resize-none text-3xl font-bold outline-0 rounded'
                    />
                </div>

                <div className="">
                    <label className='text-lg block mb-2'>Blog Content</label>
                    <Editor data="hello" onChange={(body) => setBlog({...blog, body})} />
                </div>

                <div className="">
                    <button className='text-lg px-5 py-2 rounded shadow bg-blue-500 text-white'>
                        Update Blog
                    </button>
                </div>
            </form>
        </Layout>
    )
}