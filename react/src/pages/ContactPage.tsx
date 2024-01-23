import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "../css/ContactUs.css";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  firstname: string;
  lastname: string;
  country: string;
  subject: string;
}
/** @Email Should be inserted here*/
const ContactPage: React.FC = () => {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((body: any) => {
        setCountries(body.map((country: any) => country.name.common));
      });
  }, []);

  const [countries, setCountries] = useState<Array<string>>([]);

  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    country: "australia",
    subject: "",
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

    console.log(formData);

    emailjs
      .sendForm(
        "service_s0ke1ue",
        "template_ei9ibh2",
        "#contactForm",
        "n9XCehjt--EDjVLFT"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          alert("Success! Thank you for your email.");
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Me</h2>
          <p>Want to work together? Send me an email!</p>
        </div>
        <div className="column">
          <form id="contactForm" onSubmit={handleSubmit}>
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
              {countries.sort().map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "170px" }}
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
