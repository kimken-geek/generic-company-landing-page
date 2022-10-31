import React from 'react';
import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ContactImg from '../contact-us.png';

function Contact() {
    
  return (
    <>
    <div className="container mt-5 containercontact min-vh-100">
        <div className="contact-img ms-5 img-fluid">
            <img src= {ContactImg} className='headerimg' alt='headerimg'/>
        </div>
        <Form className='ms-3' id='formcontainer'>
            <h2 className='text-center'>Contact Us</h2>
            <hr className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom'></hr>
            <Form.Group className="mb-3" controlId="formBasicName" required>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail " required>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message..."/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
    
        </Form>
    </div>
    </>
  );
}

export default Contact;