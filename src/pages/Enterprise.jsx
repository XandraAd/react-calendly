/* eslint-disable no-unused-vars */
import React from 'react'
import {Container, Card, Row, Col, Button } from 'react-bootstrap'
import compass from '../images/compass.png';
import laz from '../images/laz.png';
import ebay from '../images/ebay.png';
import drop from '../images/drop.png';
import twi from '../images/twi.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';




const Enterprise = () => {
  return (
    <>
    
    <Container className="container">
	<Row className="row">
		<Col className="col-md-12" >
			<h2 id="ent3"><strong className="text-primary">Way more</strong> than a <br/>scheduling link</h2>
			<p id="ent3">Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit, sed do eiusmod
			tempor incididunt<br/> ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam,
			quis nostrud<br/> exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo
			consequat.
      </p>
			<br/>
			<br/>
				<Button type="button" className="btn btn-dark">Contact Sales</Button>
        </Col>
        </Row>
        </Container>
			<hr/>
<Container class="container">
	<Row class="row">
		<Col class="col-md-12">
			<h5 className="ent2">
				Trusted by more than <strong className="text-primary ent2">50,000</strong> of the worlds<br/> biggest Brand
			</h5>
			<br/>
			<br/>
			<br/>
			<div className="icon-con">
				<img src={compass} width="100px" height="50px" alt=""/>
				<img src={drop} width="100px" height="50px" alt=""/>
				<img src={ebay} width="100px" height="50px" alt=""/>
				<img src={laz} width="100px" height="50px" alt=""/>
				<img src={twi} width="100px" height="50px" alt=""/>
			</div>
      </Col>
      </Row>
      </Container>
<hr/>
<Container className="container">
	<Row className="row">
	<Col className="col-md-12 team1">
		<Card className="card ent1 ">
  <Card.Header className="card-header">Sales</Card.Header>
  <Card.Body class="card-body">
  <Card.Img src={icon2}/>
  </Card.Body>
  <Card.Footer className="card-footer">Lorem ipsum dolor <br/>
  sit amet, consectetur adipisicing<br/> elit, sed do eiusmod
  tempor<br/> incididunt ut labore et dolore</Card.Footer>
</Card>
<hr/>
<Card className="card">
  <Card.Header className="card-header">Customer service</Card.Header>
  <Card.Body className="card-body">
  <Card.Img src={icon3}/>
  </Card.Body>
  <Card.Footer className="card-footer">Lorem ipsum dolor <br/>
  sit amet, consectetur adipisicing<br/> elit, sed do eiusmod
  tempor<br/> incididunt ut labore et dolore</Card.Footer>
</Card>
<hr/>
<Card className="card">
  <Card.Header className="card-header">Recruiting</Card.Header>
  <Card.Body className="card-body">
  <Card.Img src={icon1}/>
  </Card.Body>
  <Card.Footer className="card-footer">Lorem ipsum dolor <br/>
  sit amet, consectetur adipisicing<br/> elit, sed do eiusmod
  tempor<br/> incididunt ut labore et dolore</Card.Footer>
</Card>
<hr/>
<Card className="card">
  <Card.Header className="card-header">Recruiting</Card.Header>
  <Card.Body className="card-body">
  <Card.Img src={icon1}/>
  </Card.Body>
  <Card.Footer className="card-footer">Lorem ipsum dolor <br/>
  sit amet, consectetur adipisicing<br/> elit, sed do eiusmod
  tempor<br/> incididunt ut labore et dolore</Card.Footer>
</Card>
<hr />
<Card className="card ent1 ">
  <Card.Header className="card-header">Sales</Card.Header>
  <Card.Body class="card-body">
  <Card.Img src={icon2}/>
  </Card.Body>
  <Card.Footer className="card-footer">Lorem ipsum dolor <br/>
  sit amet, consectetur adipisicing<br/> elit, sed do eiusmod
  tempor<br/> incididunt ut labore et dolore</Card.Footer>
</Card>
</Col>
 </Row>
  </Container>
  </>
 
  )
}

export default Enterprise