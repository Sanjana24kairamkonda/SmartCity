import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling
import { Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  const handleSuccess = (response) => {
    console.log("encoded JWT token:" + response.credential);
    const userObj = jwtDecode(response.credential);
    console.log(userObj);
    setUser(userObj);
    document.getElementById("signInDiv").hidden = true;
    
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "131096786758-d87chdb6ah5dn7tgjko85sjls5rgrd1j.apps.googleusercontent.com",
      callback: handleSuccess
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    window.google.accounts.id.prompt();
  }, []);

  return (
    <div className='login-container'>
      <div className='login-content'>
        <div id='signInDiv' className='sign-in-button'></div>
        {Object.keys(user).length !== 0 && (
          <div className='profile-section'>
            <button className='sign-out-button' onClick={handleSignOut}>Sign Out</button>
            <div className='profile-info'>
              <img className='profile-pic' src={user.picture} alt="User Profile" />
              <h3 className='profile-name'>{user.name}</h3>
            </div>
            <div className='continue'>
          <Button variant='primary' onClick={()=>navigate('/page')}>Continue</Button>
        </div>
          </div>
          
        )}
        
      </div>
    </div>
  );
};

export default Login;
