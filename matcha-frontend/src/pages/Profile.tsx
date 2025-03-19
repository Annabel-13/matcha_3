//
//
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // React Router hook for navigation
//
// interface UserProfile {
//     username: string;
//     email: string;
//     bio?: string;
// }
//
// const Profile: React.FC = () => {
//     const [profile, setProfile] = useState<UserProfile | null>(null);
//     const navigate = useNavigate(); // hook to navigate programmatically
//
//     useEffect(() => {
//         // Check if authToken exists in localStorage
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             // If no token is found, redirect to login page
//             navigate('/');
//         } else {
//             // Simulate an API request to fetch profile data
//             const mockProfile: UserProfile = {
//                 username: 'JohnDoe',
//                 email: 'john.doe@example.com',
//                 bio: 'Люблю путешествовать и готовить вкусные блюда.',
//             };
//
//             // Simulating a loading delay
//             setTimeout(() => {
//                 setProfile(mockProfile);
//             }, 500);
//         }
//     }, [navigate]); // Add navigate as a dependency to avoid missing re-renders
//
//     if (!profile) {
//         return <p>Loading profile...</p>; // Show loading message until profile data is available
//     }
//
//     return (
//         <div>
//             <h1>User Profile</h1>
//             <p><strong>Name:</strong> {profile.username}</p>
//             <p><strong>Email:</strong> {profile.email}</p>
//             {profile.bio && <p><strong>About me:</strong> {profile.bio}</p>}
//             <button>Edit Profile</button>
//         </div>
//     );
// };
//
// export default Profile;
//
import React, { useState, useEffect } from 'react';
// import Button from '../components/Button.tsx';
import '../styles/Profile.css';
import CommonImage from "../components/CommonImage.tsx";
import {useNavigate} from "react-router-dom";

interface UserProfile {
    username: string;
    bio?: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            navigate('/');
        } else {
            const mockProfile: UserProfile = {
                username: 'JohnDoe',
                bio: 'Passionate about traveling and culinary arts.',
            };
            setTimeout(() => {
                setProfile(mockProfile);
            }, 500);
        }
    }, [navigate]);

    if (!profile) {
        return <p>Loading profile...</p>;
    }

    return (
        <div className="transparent-box">
            {/*<h1 className="profile-heading">User Profile</h1>*/}
            <h1 className="profile-detail"><strong>Name:</strong> {profile.username}</h1>
            <CommonImage src="../src/assets/images/profile.png" alt="Profile" />
            {profile.bio && <p className="profile-detail"><strong>About me:</strong> {profile.bio}</p>}
            {/*<Button onClick={() => navigate('/edit-profile')} className="">*/}
            {/*    Edit Profile*/}
            {/*</Button>*/}
        </div>
    );
};

export default Profile;
