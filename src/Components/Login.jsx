

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export const Login = () => {

  

const initialState = {

  user: '',
  password: ''

}

  const [body, setBody] = useState(initialState);
  

  const onSubmit = () => {
  //  e.preventDefault();
    axios.post("http://localhost:3300/login",{
      username: body.user,
      password: body.password,
  }).then((result) => {
    console.log(result);
  });
}
  

  const loginS = () => {
   // e.preventDefault();
    console.log('hello');
  }


  const inputChange = ({ target }) => {
    
    const {name, value } = target
    setBody({ ...body, [name]:value})
  }

  useEffect(() => {
    
  });
  

  return (
    <>
       <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
    
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="data:image/png;base64,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" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"></img>
            </div>

            <div className="mb-3">
              <input 
              type="text" 
              className="form-control" 
              id="Username" 
              aria-describedby="emailHelp"
              placeholder="User Name"
              name='user'
              value={ body.user}
              onChange={inputChange}
              ></input>
            </div>
            <div className="mb-3">
              <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="password"
              name='password'
              value={body.password}
              onChange={inputChange}
              
              ></input>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100" onClick={loginS}> <NavLink to="/home">SIGN IN</NavLink></button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" className="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>

  </div></>
  )
}
