import {useState} from "react";
import {signIn} from "next-auth/react"
import {Button, Form, Input, InvalidInput} from "@/components/Form";
import Main from "@/components/layouts/Main";

export default function Login({ csrfToken }) {

    const [error, setError] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await signIn("credentials", {...user, redirect: false})
        if (response.error) return setError(response.error)
        location.href = '/';
    }

    return (
        <Main className="p-5">
            <div className="shadow p-5 w-full max-w-[24rem] mx-auto">
                <h3 className="text-xl font-bold mb-5">Login</h3>
                <InvalidInput error={error} className="text-center mb-2" />
                <Form onSubmit={handleSubmit}>
                    <Input name="username" value={user.username} onChange={handleChange} label="Username or Email" />
                    <Input type="password" name="password" value={user.password} onChange={handleChange} label="Password" />
                    <Button>Login</Button>
                </Form>
            </div>
        </Main>
    )
}