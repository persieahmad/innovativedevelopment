import React from 'react';
import './Contact.css';
import { Container, Image, Row, Col, ModalFooter } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <Fade top><h1><span className='c'>C</span>ontact</h1></Fade>
                <Container className="cimg">
               <Row>
                <Col sm><Fade left><a href="https://www.hackerrank.com/ahmadsadiq885" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" /></a></Fade></Col>
                <Col sm><Fade left><a href="https://stackoverflow.com/users/story/11037173?_=1" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/stackoverflow-512.png" /></a></Fade></Col>
                <Col sm><Fade left><a href="https://github.com/persieahmad" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" /></a></Fade></Col>
                <Col sm><Fade bottom><a href="https://angel.co/persieahmad_" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn0.iconfinder.com/data/icons/picons-social/57/69-angellist-512.png" /></a></Fade></Col>
                <Col sm><Fade right><a href="https://twitter.com/PersieAhmad" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" /></a></Fade></Col>
                <Col sm><Fade right><a href="https://www.linkedin.com/in/persieahmad/" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_in-512.png" /></a></Fade></Col>
                <Col sm><Fade right><a href="https://aboutme.google.com/u/1/?referer=gplus&pageId=none" rel="noopener noreferrer" target="_blank"><Image className="webimg2" src="https://www.gstatic.com/images/branding/product/2x/google_plus_96dp.png" /></a></Fade></Col>
              </Row>
            </Container>
            <ModalFooter className="footer"><b>Email</b>: ahmadsadiq885@gmail.com <b>Phone</b>: (+91) 9140700779</ModalFooter>
            </div>
        );
    }
}

export default Contact;