import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './Toggle.css'

class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              About Me
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>B.Tech (CSE) 2017-2021</h4>
            <p>
            • Always Learning. <br/>
            • Passionate about Programming, App's User Interface and Web Development.<br/>
            • Career interests : Front-End Development, Full Stack Development, React Native.<br/>
            • Know How to code in Java and have a good knowledge of OOPs Concept.<br/>
            • Knowledge of JSON files and accessing objects key-value.<br/>
            • Know how to design UI using XML and can assign activities.<br/>
            • Know how to design a responsive web page using HTML5, CSS3, Javascript, jQuery, Bootstrap.<br/>
            • Avid interest in PWA Development, MERN Stack, Machine Learning Apps & Augmented Reality (AR).<br/>
            • Hands-on experience on React, Node, Express & Third Party APIs integration<br/>
            • Deepening in ES 6/7/8, React, Redux, Expo, React Native, AI / ML.<br/>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class Toggle extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar>
          <Button className="knowmore"
            variant="primary"
            onClick={() => this.setState({ modalShow: true })}
          >
            Know More
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default Toggle;