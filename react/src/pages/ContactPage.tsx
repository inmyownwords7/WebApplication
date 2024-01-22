import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../css/ContactUs.css'
interface ContactFormData {
  firstname: string;
  lastname: string;
  country: string;
  subject: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: '',
    lastname: '',
    country: 'australia',
    subject: '',
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Use formData for further processing
    console.log(formData);
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="row">
        <div className="column">
   
        </div>
        <div className="column">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={formData.firstname}
              onChange={handleChange}
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={formData.lastname}
              onChange={handleChange}
            />
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: '170px' }}
              value={formData.subject}
              onChange={handleChange}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
