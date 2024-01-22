import React, { useState, ChangeEvent, FormEvent} from 'react';
// @ts-ignore
import emailjs from 'emailjs'

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Use emailjs.send here to send the email using the form data
        // You'll need to replace 'YOUR_EMAIL_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
        // For more details, refer to the emailjs documentation: https://www.emailjs.com/docs/

        // Example:
        emailjs.send('YOUR_EMAIL_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Email sent successfully', response);
            })
            .catch((error) => {
                console.error('Email sending failed', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactForm;
