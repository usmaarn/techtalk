import Main from "@/components/layouts/Main";
import {Button, Form, Input} from "@/components/Form";
import {useState} from "react";
import axios from "axios";
import {error} from "next/dist/build/output/log";

export default function Register() {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/register', user)
            .then(response => {
                console.log(response.data)
                location.href = '/auth/login'
            })
            .catch(error => console.warn(error.response.data));
    }

    return(
        <Main className="p-5">
            <div className="shadow p-5 w-96 mx-auto">
                <h3 className="text-xl font-bold mb-5">Register</h3>
                <Form onSubmit={handleSubmit}>
                    <Input name="name" value={user.name} onChange={handleChange} label="Full Name" />
                    <Input name="username" value={user.username} onChange={handleChange} label="Username" />
                    <Input type="email" name="email" value={user.email} onChange={handleChange} label="Email Address" />
                    <Input type="password" name="password" value={user.password} onChange={handleChange} label="Password" />
                    <Button>Register</Button>
                </Form>
            </div>
        </Main>
    )

}