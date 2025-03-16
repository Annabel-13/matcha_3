import React, { useState } from 'react';
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Простая валидация
        if (!email || !password) {
            setError('Pls, fill all fields!');
            return;
        }

        // Здесь можно добавить вызов API для авторизации
        console.log('Login with:', email, password);
        setSuccess('Login was succeseed!');
    };

    return (
        <div className="transparent-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;
