/* eslint-disable no-unused-vars */
import React from 'react'
import {Container, Row, Col, Form, Button, Card, Figure} from 'react-bootstrap'

import image1 from '../images/image1.jpeg';
import compass from '../images/compass.png';
import laz from '../images/laz.png';
import ebay from '../images/ebay.png';
import drop from '../images/drop.png';
import twi from '../images/twi.png';



const Home = () => {
  return (
    <>
 
    <Container>
    <Row>
<Col md="6">
		<h1>Easy<br/> Scheduling<br/> <strong className="text-primary">ahead</strong>
        </h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat..</p>
        <hr />
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button><br />
      <h6 className="text-muted">Create your free account. No credit card required</h6>
    </Form>
    </Col>
    <Col md="1"></Col>
<Col md="5">
<img src={image1} style={{width:"100%"}}/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, soluta impedit error autem cumque reprehenderit, ut mollitia, quas tenetur quisquam architecto voluptatibus maiores! Nobis veniam ullam consequuntur voluptatum eos repellat?</p>
</Col>
</Row>
</Container>
<br />
<Container>
    <Row>
        <Col md="12">
        <h1 className="cal4">Simplified scheduling for more than &nbsp; <strong className="text-primary">10,000,000</strong> &nbsp; users worldwide</h1><br/>
        </Col>
        <Container className="icon-con">
                <img src={compass} width="100px" height="50px" alt=""/>
				<img src={drop} width="100px" height="50px" alt=""/>
				<img src={ebay} width="100px" height="50px" alt=""/>
				<img src={laz} width="100px" height="50px" alt=""/>
				<img src={twi} width="100px" height="50px" alt=""/>
        </Container >
    </Row>
</Container>
<br /><br />

<Container>
    <Row>
     <Col md="4">
        <Card style={{ width: '24rem' }}/>
        <Card.Body>
            <Card.Title>
            <h5 className="card-title">
            1.<strong>Create simple Rules.</strong></h5>
            </Card.Title>
            <Card.Text>
            <p className="card-text">Lets Calendly know your availability.</p>
            </Card.Text>
        
            
        </Card.Body>
    </Col>
        <Col md="4">
        <Card style={{ width: '24rem' }}/>
        <Card.Body className='card-body'>
            <Card.Title>
            <h5 className="card-title">2.<strong>Share your link.</strong></h5>
            </Card.Title>
            <Card.Text>
            <p className="card-text">Send guests your Calendly link or mend it on your website.</p>
            </Card.Text>
        </Card.Body>
        </Col>
        <Col md="4">
        <Card style={{ width: '24rem' }}/>
        <Card.Body>
            <Card.Title>
            <h5 className="card-title">3.<strong>Get booked.</strong></h5>
            </Card.Title>
            <Card.Text>
            <p className="card-text">They pick a time and the events is added to your calendar.</p>
            </Card.Text>
        </Card.Body>
        </Col>
    </Row>
</Container>
</>
  )
}

export default Home