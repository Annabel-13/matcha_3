

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

interface UserProfile {
    username: string;
    email: string;
    bio?: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const navigate = useNavigate(); // hook to navigate programmatically

    useEffect(() => {
        // Check if authToken exists in localStorage
        const token = localStorage.getItem('authToken');
        if (!token) {
            // If no token is found, redirect to login page
            navigate('/');
        } else {
            // Simulate an API request to fetch profile data
            const mockProfile: UserProfile = {
                username: 'JohnDoe',
                email: 'john.doe@example.com',
                bio: 'Люблю путешествовать и готовить вкусные блюда.',
            };

            // Simulating a loading delay
            setTimeout(() => {
                setProfile(mockProfile);
            }, 500);
        }
    }, [navigate]); // Add navigate as a dependency to avoid missing re-renders

    if (!profile) {
        return <p>Loading profile...</p>; // Show loading message until profile data is available
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            {profile.bio && <p><strong>About me:</strong> {profile.bio}</p>}
            <button>Edit Profile</button>
        </div>
    );
};

export default Profile;

