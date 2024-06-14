import React, { useState } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

function App() {
  const [user, setUser] = useState(null);
const [pic,setPic]=useState("")
  const handleResolve = (res) => {
    console.log('Login Success:', res);
    // Assuming res.data contains user information
    setUser(res.data); 
     // Save user info to state
     setPic(res.data.picture.data.url)
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
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Facebook ID: {user.id}</p>
          <img src={pic} alt="not showed" width={100} height={100} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
