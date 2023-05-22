import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Assets
import instagram from '../assets/instagram-logo.png'
import linkedin from '../assets/linkedin.png'
function Footer() {
    return (
        <footer className='footer'>
            <Container className='pt-4'>
                <Row>
                    <h1>Medium Company</h1>
                    <Col md='10' className='text-start' direction='horizontal'>
                        <Row>
                        
                        <Col md='6'>
                            <h3>Contact no</h3>
                            +91-7892609768 <br />
                            +91-9148434532
                        </Col>
                        <Col md='6'>
                            <h3>Mail - ID</h3>
                            rohithjsharma28@gmail.com <br />
                            harshasrinivas1010@gmail.com
                        </Col>
                        </Row>
                    </Col>
                    
                        <Col md='2' className='text-end'>
                            <Row>
                            <span>
                                <img src={instagram} alt='insta' className='mb-2'></img>
                            </span>
                            <span>
                                <img src={linkedin} alt='linkedin' className=''></img>
                            </span>
                            </Row>
                        </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
