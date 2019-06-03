import React from 'react';
import Image from 'react-bootstrap/Image';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Toggle from '../Toggle/Toggle';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="aboutme" className="picdiv">
            <Fade left>
            <h1 className="am">About Me</h1>
            </Fade>
            <Zoom>
                <Image className="mypic" src={require('../img/me.jpg')} roundedCircle />
            </Zoom>
            <Fade right>
             <h1>Ahmad Sadiq</h1>
             <h4>Founder of <span className="id">Innovative Development</span></h4>
            </Fade>
            <Fade bottom>
            <Toggle />
            </Fade>
            </div>
        );
    }
}

export default AboutMe;