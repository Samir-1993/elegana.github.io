import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";
import emailIcon from "../Assets/images/email.png";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    orderNumber: "",
    message: "",
    agreed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    // Redirect to Thank You page
    navigate("/thankyou");
  };

  return (
    <div className="contact-box">
      <h4 className="form-title">
        <img src={emailIcon} className="email-icon" alt="Email" /> Write Us
      </h4>
      <h5 className="form-subtitle mt-30">Your Information</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="orderNumber"
          placeholder="Order Number"
          value={formData.orderNumber}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
          />
          <label>
            I have read and understood the Contact Us privacy and policy.
          </label>
        </div>
        <button type="submit" className="btn1 send-button mt-20">
          Send
        </button>
      </form>
    </div>
  );
};
