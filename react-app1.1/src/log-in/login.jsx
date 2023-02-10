import React, { useState} from "react";

export const Login = (props)=>{
    return (
        <>
        <div className='form-container'>
            <form className='form' action="">
                <div className="title-heading-con">
                <h1 className="title-heading">Login</h1>
                </div>
                <hr />
                <div className='input-field'>
                    <label>Username</label>
                    <input type="text" name='username' placeholder='Username'/>
                </div>
                <div className='input-field'>
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Passsword'/>
                </div>
                <div className='signup-btn-con'>
                   <button className="signup-btn">Login</button>
                </div>
                </form>

                <div className="signup-link-con">
                   <span>Already have an account?</span>
                    <button className="signup-link" onClick={() =>props.onFormSwitch('Signup')}>Signup</button>
                </div>
        </div>
        </>
    
    )
}

