import React,{useState} from 'react';
import {Navigate} from'react-router-dom';
import './Home.css';
import Typed from 'react-typed';


export const Home=()=>{
        const[page, setPage]=useState(false);
    if (page){
            return <Navigate to="/about"/>;
    }   

    return(
        <>
            <div className='container-fluid home'>
            <div className='d-lg-flex flex-row-lg-reverse'>
                <div className='text-con col'>
                    <span className='h1 display-5'>Hi, I'm John Zelade</span>
                 <div className='typing-text'>
                    
                 <Typed
                    strings={[
                    'Aspiring Web Developer.',
                    'Aspiring UI/UX Designer.',]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop >
                </Typed>
                </div>
                   
                <div className='view-con'>
                <button className="btn" onClick={()=>{setPage(true)}}>
                     <span className="btn-text-one">Know me</span>
                     <span className="btn-text-two">About</span>
                    </button>                
                </div>
                </div>  
                <div className='image-con col'>     
                    <img className='img img-fluid' src="images/image1.png" alt="" />
                </div> 
           </div>
        </div>    
        </>
    );
}