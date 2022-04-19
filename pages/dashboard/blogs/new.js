import Editor from "@/components/Editor";
import {useState} from "react";
import axios from "axios";
import Admin from "@/components/layouts/Admin";
import {Button, Form, InputBox, TextArea} from "@/components/Form";

export default function Create(){

    const [blog, setBlog] = useState({
        title: '',
        body: '',
        user: '',
    });

    const handleChange = e => setBlog({...blog, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data: user} = await axios.get('/api/user')

        axios.post('/api/blog/store', blog)
            .then(res => res.data.success ? location.href = '/dashboard/blogs' : '')
            .catch(err => console.warn(err.response.data))
    }

    return (
        <Admin heading='Create New Blog'>
            <Form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-[800px] mt-10'>

                <TextArea label="Post Title" name="title" value={blog.title} onChange={handleChange}  />

                <InputBox label="Post Content">
                    <Editor onChange={(body) => setBlog({...blog, body})} />
                </InputBox>

                <Button>Create Blog</Button>
            </Form>
        </Admin>
    )
}