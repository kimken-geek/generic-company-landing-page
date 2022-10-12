import React from 'react'
import AboutImg from '../about-us.png';


const About = () => {
  return (
    <div className='container about-container mt-5'>
        <div className='col-12 col-md-9 col-lg-6'>
            <h1 className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom'>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Vision</h2>
            <p>Cillum dolore eu fugiat nulla</p>
            <h2>Mission</h2>
            <p>Mollit anim id est laborum</p>
            <h3>Core Values</h3>
            <ol>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Lorem</li>
            </ol>
            
        </div>
        <div className='imgcontainer img-fluid col-6 col-md-4 col-lg-6'>
            <img src= {AboutImg} className='aboutimg' alt='Aboutimg'/>
        </div>
    </div>
  )
}

export default About