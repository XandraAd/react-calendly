
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import happy from '../images/happy.jpeg';
import surprise from '../images/surprise.jpeg';
import computerman from '../images/computerman.jpeg';

const Individuals = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col md="6">
            <h1>
              <strong> The genius way<br />to work <span className="text-primary">better</span></strong>
            </h1>
            <br />
            <p>Calendly makes it easy to work smarter when you are<br />working solo.<br />Meeting, sessions and appointments<br />become more efficient ways to achieve success and <br />accomplish goals</p>

            <Button type="submit" className="bg-primary" size="lg">sign up for free</Button>
          </Col>
          <Col md="6">
            <img src={happy} alt="african woman" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <Container className="container">
        <Row className="row">
          <Col md="6">
            <img src={surprise} alt="happy woman" className="img-fluid" />
          </Col>
          <Col md="6">
            <p className="text-primary">
              <strong>A CURATED CALENDAR</strong>
            </p>
            <br />
            <h1><strong>Book up efficiently</strong></h1><br />
            <p>When invites select a meeting slot from the schedule, they<br />only see the items you make available, and the length and<br />type of meeting you want to have. Your schedule fills up<br />efficiently, and everyone avoids excess email exchange </p>
            <br />
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <Container className="container">
        <Row className="row">
          <Col md="6">
            <h1><strong>Work like you have a personal assistant</strong></h1>
            <p>AUTOMATED NOTIFICATIONS AND FOLLOW-UP<br />
              Because Calendly automates administrative tasks like<br /> sending reminder emails and follow-ups, you can focus on the work<br /> that builds your business and brings customers<br />back for more</p>
            <br />
          </Col>
          <Col md="6">
            <img src={computerman} alt="a man behind a computer" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div className="hero">
        <Container className="container">
          <Row className="row">
            <Col style={{ border: "1px solid green", height: "12rem", backgroundColor: "green", width: "100%" }} md="12">
              <h1 style={{ padding: "40px" }}><strong>Find just-right plans also<br /> for individuals and small Teams</strong>&nbsp;
                <Button type="button" className="btn btn-dark">Sign up for free</Button>
              </h1>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default Individuals;
