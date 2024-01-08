


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/auth/login')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const handleChange = () => {

  };

  const handleClick =() => {
    
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label" >Username</label>
        <input type="text" className="form-control" id="username" aria-describedby="username" onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"  onChange={handleChange}/>
      </div>
    
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Login</button>
    </form>
  );
};
export default Login;


