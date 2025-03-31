import React, { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";

function Signup({ CiUser, TbPasswordUser, FormHandle }) {
  const [User, setUser] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  function handleSignup(e) {
    e.preventDefault();

    console.log(User, Email, Password);

    
    setUser('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your username"
            value={User}
            onChange={(e) => setUser(e.target.value)}
          />
          <CiUser className="icon user" />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MdMarkEmailUnread className="icon email" />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Enter your password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TbPasswordUser className="icon password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => FormHandle('login')}>Already have an account? Please <b>Login</b></p>
    </div>
  );
}

export default Signup;
