import React, { useState} from "react";

export const Signup = (props)=>{
    return (
        <>
        <div className='form-container'>
            <form className='form' action="">
                <div className="title-heading-con">
                <h1 className="title-heading">Sign up</h1>
                </div>
                <hr />
                <div className='input-field'>
                    <label>Username</label>
                    <input type="text" name='username' placeholder='Username'/>
                </div>
                <div className='input-field'>
                    <label>E-mail</label>
                    <input type="email" name='email' placeholder='email' />
                </div>
                <div className='input-field'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Passsword'/>
                </div>
                <div className='signup-btn-con'>
                   <button className="signup-btn">SignUp</button>
                </div>
                </form>

                <div className="login-link-con">
                   <span>Already have an account?</span>
                    <button className="login-link" onClick={() =>props.onFormSwitch('Login')}>Login</button>
                </div>
        </div>
        </>
    
    )
}

