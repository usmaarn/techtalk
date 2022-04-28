import {useState} from "react";
import {Button, Form, Input, InvalidInput} from "@/components/Form";
import Main from "@/components/layouts/Main";
import axios from "axios";
import cookie from 'cookie-cutter';

export default function Login({ csrfToken }) {

    console.log(cookie.get('access_token'))

    const [error, setError] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
       try {
           e.preventDefault();
           let response = await axios.post('/api/auth/login', user);
           console.log(response.data);
           // location.href = '/';
       }catch (e){
           setError(e.response.data);
       }
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