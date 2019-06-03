import React from 'react';
import './Company.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class Company extends React.Component {
    render() {
        return (
            <div id="company">
             <span className="atc"><hr width="80%" /><Fade left><h1>About <span className="i">I</span>nnovative <span className="d">D</span>evelopment</h1></Fade>
             <hr width="80%" /></span>
             <Container><Fade right><p><b><em>Innovative Development</em></b> is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. Our technology products, services and engineering are built on four decades of innovation, with a world-renowned management philosophy, a strong culture of invention and risk-taking, and a relentless focus on customer relationships.</p></Fade></Container>
             <Container><Fade top><h1>Our <span className="ser">Services</span></h1></Fade></Container>
             <Container className="cimg">
               <Row>
                <Col sm><Fade left><Image className="webimg" src="https://image.flaticon.com/icons/svg/1085/1085791.svg" /><br /><h3>Purely Native<br /> Mobile Apps</h3></Fade></Col>
                <Col sm><Fade bottom><Image className="webimg" src="https://image.flaticon.com/icons/svg/1197/1197511.svg" /><br /><h3>Website<br /> Development</h3></Fade></Col>
                <Col sm><Fade right><Image className="webimg" src="https://image.flaticon.com/icons/svg/567/567756.svg" /><br /><h3>Progressive Web Applications</h3></Fade></Col>
              </Row>
            </Container>
            </div>
        );
    }
}

export default Company;
