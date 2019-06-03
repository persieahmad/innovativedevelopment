import React from 'react';
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import Slideshow from './components/Carousel/Carousel';
import AboutMe from './components/AboutMe/AboutMe';
import Company from './components/Company/Company';
import Contact from './components/Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
       <NavBar />
       <Slideshow />
       <AboutMe />
       <Company />
       <Contact />
      </div>
    );
  }
}

export default App;
