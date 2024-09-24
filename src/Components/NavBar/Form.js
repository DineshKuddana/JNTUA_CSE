import React, { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = ({ show, onClose }) => {
  
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionNo] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/api/students', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         admissionNo,
  //         email,
  //         phoneNumber,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     toast.success("Successfully registered!"); // Display success notification
  //     // Clear form data
  //     setName("");
  //     setAdmissionNo("");
  //     setEmail("");
  //     setPhoneNumber("");
  //     // Redirect to home page after form submission
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`login-page ${show ? "show" : ""}`}>
      <div className="login-form">
        <form  className="form-container">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />

          <label htmlFor="admissionNo" className="form-label">
            Admission No
          </label>
          <input
            type="text"
            id="admissionNo"
            value={admissionNo}
            onChange={(e) => setAdmissionNo(e.target.value)}
            className="form-input"
            required
          />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />

          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-input"
            minLength='10'
            maxLength='10'
            required
          />

          <button type="submit" className="form-submit-button">
            Submit
          </button>
          <button type="button"  onClick={handleClose} className='close' >Close</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
