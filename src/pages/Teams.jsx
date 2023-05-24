/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import work from '../images/work.jpeg';
import uniq from '../images/uniq.jpeg';
import sales from '../images/sales.jpeg';
import recruite from '../images/recruite.jpeg';
import customer from '../images/customer.jpeg';
import edu from '../images/edu.jpeg';

const Teams = () => {
  return (
    <>
      <Container className="container">
        <Row className="row">
          <Col className="col-md-6">
            <h2>
              <strong className="text-primary">Power up</strong> your<br />
              teams
            </h2>
            <p>
              Calendly gives you control over team scheduling with a
              standardized, scalable process. Its secure, easy to manage, and
              integrates with your team&apos;s favorite tools, so you can get
              everyone working as efficiently and effectively as possible.
              <br />
              <br />
              <Button type="button" className="btn btn-primary">
                Start for free
              </Button>
              <br />
              <br />
              <Button type="button" className="btn btn-light">
                Contact sales
              </Button>
            </p>
          </Col>
          <Col className="col-md-6">
            <img className="img-fluid" src={work} alt="teamwork" style={{width: "100%", height:"80%"}} />
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="container">
        <Row className="row">
          <Col className="col-md-6">
            <img src={uniq} className="img-fluid"  style={{width: "80%"}} />
          </Col>
          <Col className="col-md-6">
            <p style={{ color: "blue" }}>AUTOMATED ASSIGNMENT</p>
            <h3>
              <strong>Control how your team gets booked</strong>
            </h3>
            <p>
              With Calendly, you can offer sessions that are a few minutes or a
              few hours, for one invitee or a group. Automated round-robin,
              first-available, or geography-based assignments let you easily
              divvy up meetings in any way that works for your team members.
            </p>
          </Col>
        </Row>
      </Container>
      <hr />

      <p className="stylep">Solutions</p>
      <Container className="container">
        
        <Row className="row">
          <Col className="col-md-12 team1">
            <Card className="card" style={{ width: "400px" }}>
              <Card.Img className="card-img-top" variant="top" src={sales} alt="Card image" />
              <Card.Body>
                <Card.Title>
                  <h4>Sales</h4>
                </Card.Title>
                <Card.Text>Gets to your best leads faster</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <hr />
            <Card className="card" style={{ width: "400px" }}>
              <Card.Img className="card-img-top" variant="top" src={recruite} alt="Card image" />
              <Card.Body>
                <Card.Title>
                  <h4>Recruiting</h4>
                </Card.Title>
                <Card.Text>Less emailing more closing.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <hr />
            <Card className="card" style={{ width: "400px" }}>
              <Card.Img className="card-img-top" variant="top" src={customer} alt="Card image" />
              <Card.Body>
                <Card.Title>
                  <h4>Customer service</h4>
                </Card.Title>
                <Card.Text>Connect with customers when it matters.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <hr />
            <Card className="card" style={{ width: "400px" }}>
              <Card.Img className="card-img-top" variant="top" src={edu} alt="Card image" />
              <Card.Body>
                <Card.Title>
                  <h4>Education</h4>
                </Card.Title>
                <Card.Text>Boost student success.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teams;
