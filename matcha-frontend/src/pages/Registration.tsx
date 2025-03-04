import React, { useState } from 'react';

interface RegistrationForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    sexualOrientation: string;
    interests: string;
}

const Registration: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationForm>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        sexualOrientation: '',
        interests: '',
    });

    const [errors, setErrors] = useState<Partial<RegistrationForm>>({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = (): Partial<RegistrationForm> => {
        const errs: Partial<RegistrationForm> = {};
        if (!formData.username.trim()) errs.username = 'Username is required.';
        if (!formData.email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errs.email = 'Email address is invalid.';
        }
        if (!formData.password) {
            errs.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            errs.password = 'Password must be at least 6 characters.';
        }
        if (formData.password !== formData.confirmPassword) {
            errs.confirmPassword = 'Passwords do not match.';
        }
        if (!formData.gender) {
            errs.gender = 'Gender is required.';
        }
        if (!formData.sexualOrientation) {
            errs.sexualOrientation = 'Sexual orientation is required.';
        }
        if (!formData.interests.trim()) {
            errs.interests = 'Interests are required.';
        }
        return errs;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSuccessMessage('Registration successful!');
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: '',
                sexualOrientation: '',
                interests: '',
            });
        } else {
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <span>{errors.gender}</span>}
                </div>
                <div>
                    <label htmlFor="sexualOrientation">Sexual Orientation</label>
                    <select id="sexualOrientation" name="sexualOrientation" value={formData.sexualOrientation} onChange={handleChange}>
                        <option value="">Select Orientation</option>
                        <option value="heterosexual">Heterosexual</option>
                        <option value="homosexual">Homosexual</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.sexualOrientation && <span>{errors.sexualOrientation}</span>}
                </div>
                <div>
                    <label htmlFor="interests">Interests</label>
                    <textarea id="interests" name="interests" value={formData.interests} onChange={handleChange} />
                    {errors.interests && <span>{errors.interests}</span>}
                </div>
                <button type="submit">Register</button>
                {successMessage && <p>{successMessage}</p>}
            </form>
        </div>
    );
};

export default Registration;
