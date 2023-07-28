import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formData.firstName === '' || formData.lastName === '' || formData.email === '') {
      setShowSuccessMessage(false);
      return;
    }

    setShowSuccessMessage(true);
  };

  return (
    <div className="App">
      <h1>Basic Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          {formSubmitted && formData.firstName === '' && <span className="error">First name is required.</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          {formSubmitted && formData.lastName === '' && <span className="error">Last name is required.</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {formSubmitted && formData.email === '' && <span className="error">Email is required.</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {showSuccessMessage && formSubmitted && (
        <p className="success">Registration successful!</p>
      )}
    </div>
  );
};

export default App;
