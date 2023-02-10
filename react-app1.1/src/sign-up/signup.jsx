import React, {Component} from "react";

class signup extends Component {
    state={
        username:" ",
        email:"",
        password:""
    };

    render() { 
        return (

            <div className='form-container'>
                <form className='form' action="">
                    <div className="title-heading-con">
                    <h1 className="title-heading">Sign Up</h1>
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
                    <div className="login-link-con">
                       <span>Already have an account?</span>
                       <a href="login" className="login-link">Login</a>
                    </div>
                    </form>
            
            </div>
                
        
        );
    }
}
 
export default signup;