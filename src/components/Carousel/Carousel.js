import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Carousel.css';
import pic4 from '../img/pic4.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import Typist from 'react-typist';

const properties = {
  duration: 6000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}
 
class Slideshow extends React.Component {
    render() {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{backgroundImage: `url(${pic2})`}}>
            <span>
              <Typist startDelay={1000}
              cursor={
                {
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 1000,
              }
            }
               >Welcome to <span className='id'>Innovative Development</span></Typist>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{backgroundImage: `url(${pic3})`}}>
            <span>
              <Typist startDelay={6000}
              cursor={
                {
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 1000,
              }
            }
               >We create <span className='id'>Websites
                <Typist.Backspace count={8} delay={400}/>Mobile Apps
                 <Typist.Backspace count={11} delay={400}/>Web Apps
                 <Typist.Backspace count={8} delay={2000}/>Websites, Mobiles Apps, Web Apps,etc</span>
              </Typist>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{backgroundImage: `url(${pic4})`}}>
            <span>
              <Typist startDelay={12000}
              cursor={
                {
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 1000,
              }
            }
               >We focus on <span className='id'>Responsiveness, Performance, Usability, Security and Maintenance.</span>
              </Typist>
            </span>
          </div>
        </div>
      </Slide>
     );
    }
}

export default Slideshow;