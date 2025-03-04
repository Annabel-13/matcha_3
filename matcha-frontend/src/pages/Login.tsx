import React, { useState } from 'react';

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
            setError('Пожалуйста, заполните все поля');
            return;
        }

        // Здесь можно добавить вызов API для авторизации
        console.log('Вход с:', email, password);
        setSuccess('Вход выполнен успешно!');
    };

    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
