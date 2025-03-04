import React, { useState, useEffect } from 'react';

interface UserProfile {
    username: string;
    email: string;
    bio?: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        // Здесь можно сделать запрос к API для получения данных профиля.
        // Пока используем мок-данные:
        const mockProfile: UserProfile = {
            username: 'JohnDoe',
            email: 'john.doe@example.com',
            bio: 'Люблю путешествовать и готовить вкусные блюда.',
        };
        // Симуляция задержки загрузки:
        setTimeout(() => {
            setProfile(mockProfile);
        }, 500);
    }, []);

    if (!profile) {
        return <p>Загрузка профиля...</p>;
    }

    return (
        <div>
            <h1>Профиль пользователя</h1>
            <p><strong>Имя:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            {profile.bio && <p><strong>О себе:</strong> {profile.bio}</p>}
            {/* Можно добавить кнопку для редактирования профиля */}
            <button>Редактировать профиль</button>
        </div>
    );
};

export default Profile;
