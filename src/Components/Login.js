import React, { useState } from 'react';
import "./App.css"

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Save user object to local storage
        localStorage.setItem('user', JSON.stringify(data.user));
        // Display success message
        setError('Login successful! Redirecting to profile...');
        setTimeout(() => {
          history.push('/profile');
        }, 2000); // Redirect after 2 seconds
      } else {
        setError(data.error);
      }
    });
  };
  


  

  return (
    <div className='container'>
        <div className='icon'>
    <p className='welcomeback'>welcome back! </p>
     <img className='image1' src="https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/512/12050-waving-hand-icon.png" alt="image1"/>
    </div>
      <h2>Sign in to your account</h2>
      <form id='signup-form'>
      <div class="form-group">

      <label for="youremail">Your email</label>
      <br/>

    
      <input
      className='input'
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br/><br/>

<label for="password">Password</label>
      <br/>
      <input
       className='input'
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br/><br/>
      <button className='button' onClick={handleLogin}>CONTINUE</button>
      </div>
      </form>
      {error && <p>{error}</p>}
      
    </div>
  );
};

export default Login;
