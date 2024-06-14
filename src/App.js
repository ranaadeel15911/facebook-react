import React, { useState } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

function App() {
  const [user, setUser] = useState(null);

  const handleResolve = (res) => {
    console.log('Login Success:', res);
    // Assuming res.data contains user information
    setUser(res.data);  // Save user info to state
  };

  const handleReject = (err) => {
    console.error('Login Failed:', err);
    // Handle login failure
  };

  const handleLogout = () => {
    window.FB.logout(function(response) {
      console.log('User logged out:', response);
      setUser(null);  // Clear user info from state
    });
  };
  return (
    <div className="App">
      {!user ? (
        <LoginSocialFacebook
          appId="1184539069216908"
          onResolve={handleResolve}
          onReject={handleReject}
          fields='id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          redirect_uri='https://www.google.com/search?q=english+to+urdu&rlz=1C1VDKB_en-GBPK1069PK1069&oq=eng&aqs=chrome.0.69i59l2j0i67i131i433i650j69i57j35i39j0i67i650j0i67i131i433i650l3j0i67i650.1395j0j7&sourceid=chrome&ie=UTF-8'
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Facebook ID: {user.id}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
