import React, { useState } from "react";

function SignIn({ CiUser, TbPasswordUser, FormHandle }) {
  const [User, setUser] = useState('');
  const [Password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();




    console.log(User, Password);
    setUser("");
    setPassword("");
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your email"
            value={User}
            onChange={(e) => setUser(e.target.value)}
          />
          <CiUser className="icon user" />
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
        <button type="submit">Sign In</button>
      </form>
      <p onClick={() => FormHandle('signup')}>Don't have an account? Please <b>Signup</b></p>
    </div>
  );
}

export default SignIn;
