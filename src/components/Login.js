import React from 'react'
// import Navbar from './Navbar'
import './Login.css'

const Login = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="loginBackground">
        <div className="wrapper">
          <div className="loginContainer">
          </div>
            <div className="loginCard">
              <h1>Login</h1>
              <form className='loginform'>
                          <input type="text"  name='name' placeholder='Name'/>
                          <input type="text"  name='Email' placeholder='Email'/>
                          <input type="password"  name='Password' placeholder='Password'/>
                          <div className='loginButton'>SUBMIT </div>
                      </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default Login