import React, { useState } from 'react';
import './sign-up/signup.css';
import './log-in/login.css';
import {Signup} from './sign-up/signup'
import {Login}  from "./log-in/login"

function App(){
    const [currentForm, setCurrentState]=useState('Login');
    const toggleForm = (fromName) =>{
        setCurrentState(fromName);
    }
        return (
            <div className='App'>
                {
                    currentForm ==="Login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
                }
            </div>
        );
    }


export default App ;