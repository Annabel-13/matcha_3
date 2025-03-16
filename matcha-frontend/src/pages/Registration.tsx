import React, { useState } from 'react';
import Button from "../components/Button.tsx";
import Input from "../components/Input.tsx";
import Select from "../components/Select.tsx";
import TextArea from "../components/TextArea.tsx";

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
    const [gender, setGender] = useState('');
    const [sexualOrientation, setSexualOrientation] = useState('');

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

    const genderOptions = [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'non-binary', label: 'Non-Binary' },
        // Add more options as needed
    ];

    const sexualOrientationOptions = [
        { value: '', label: 'Select Sexual Orientation' },
        { value: 'heterosexual', label: 'Heterosexual' },
        { value: 'homosexual', label: 'Homosexual' },
        { value: 'bisexual', label: 'Bisexual' },
        // Add more options as needed
    ];

    return (
        <div className="transparent-box">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
                    {errors.username && <span>{errors.username}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input type="password" id="password" name="password" value={formData.password}
                           onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword}
                           onChange={handleChange}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <form className="">
                    <Select
                        label="Gender"
                        options={genderOptions}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <Select
                        label="Sexual Orientation"
                        options={sexualOrientationOptions}
                        value={sexualOrientation}
                        onChange={(e) => setSexualOrientation(e.target.value)}
                    />

                </form>
                <div className="">
                    <TextArea label="Interests" id="interests" name="interests" value={formData.interests} onChange={handleChange}/>
                    {errors.interests && <span>{errors.interests}</span>}
                </div>
                <Button type="submit">Register</Button>
                {successMessage && <p>{successMessage}</p>}
            </form>
        </div>
    );
};

export default Registration;
