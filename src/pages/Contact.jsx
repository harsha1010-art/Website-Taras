import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

import '../App.css'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("Form data changed: ", formData)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send data to Google Form
            axios.post('https://sheet.best/api/sheets/e07cfb93-5ffc-4ba7-b90c-bb58bd576c0d',formData).then(response=>{
                console.log(response);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    })});
                            
      
            // Send email notification
            // const emailData = {
            //   to: 'jatayucore8@gmail.com', // Replace with your email address
            //   subject: 'Contact Form Submission',
            //   text: `
            //     Name: ${formData.name}
            //     Email: ${formData.email}
            //     Message: ${formData.message}
            //   `,
            // };
            // await axios.post('https://api.your-email-service.com/send', emailData);
            // console.log('Email notification sent successfully');
            } catch (error) {
            console.error('Error submitting form:', error);
            }

            // Reset form data
        };

            
       
    return (
        <div id='contact' className='contact'>
            <Container>
                <h1 className='pt-3 text-center'>Contact Us</h1>
                <Row className='text-center'>
                    <Col md='6' className='pt-5'>
                        Image
                    </Col>
                    <Col md='6'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className='pt-5'>
                                <Form.Control type="text" placeholder="Name" className="custom-placeholder"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.16)', 
                                             height:'80px', 
                                             borderRadius:'50px', 
                                             fontSize:'20px',
                                             textIndent:'10px',
                                             fontFamily:'Raleway',
                                             color:'white'
                                             }}
                                    name='name'
                                    onChange={handleChange}
                                    value={formData.name}/>
                            </Form.Group>
                            <Form.Group controlId="formEmail"className='pt-3'>                                
                                <Form.Control type="email" placeholder="Your email" 
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.16)', 
                                        height:'80px', 
                                        borderRadius:'50px', 
                                        fontSize:'20px',
                                        textIndent:'10px',
                                        fontFamily:'Raleway',
                                    }}
                                    name='email'
                                    onChange={handleChange}
                                    value={formData.email}/>
                            </Form.Group>
                            <Form.Group controlId="formMessage" className='pt-3 pb-3'>
                                <Form.Control as="textarea" rows={5} placeholder="Enter your message" 
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.16)', 
                                    height:'200px',
                                    borderRadius:'25px', 
                                    fontSize:'20px',
                                    textIndent:'10px',
                                    fontFamily:'Raleway',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                                name='message'
                                onChange={handleChange}
                                value={formData.message}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className=''>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
