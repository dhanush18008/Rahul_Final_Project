import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useHistory hook from React Router
import axios from 'axios';

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useHistory hook
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = `${loginData.username}:${loginData.password}`;
      const base64Credentials = btoa(credentials);
      const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.post('http://localhost:8080/', null, { headers });
      console.log('Login successful', response.data);
      // Redirect to home page upon successful login
      navigate('/home'); // Navigate to the home page
    } catch (error) {
      console.log('Login failed', error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Our App!</h1>
      <p>Sign in or register to access the full features of the app.</p>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type='text' name='username'
            value={loginData.username}
            onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password'
            value={loginData.password}
            onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LandingPage;
