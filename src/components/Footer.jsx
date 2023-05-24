/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap' 

const Footer = () => {
  return (
    <>
   <Container >
        <Row className='footer-container'>
                        

                    <Col md="4">
                    <Card className="border-0" style={{ width: '24rem' }}>
                  <Card.Body>
                    <Card.Title>
                        <h1>Easy<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary">ahead</span></h1>
                   </Card.Title>
                   <br/>
                   
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    
                    <Card.Text>
                    <p> We take the work out of connecting with others<br/> so you can accomplish more</p>
                    </Card.Text>
                    <br/>
                    
               <Link to="/itemdetails/:id">Item Details</Link>
                    
                  </Card.Body>
                </Card>
                    </Col>


                     <Col md="2">
                     <Card className="border-0"style={{ width: '26rem' }}>
                   <Card.Body>
                     <Card.Title>
                        <h3>About</h3>
                        </Card.Title>
                        <ListGroup className="list-group">
                        
                        <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">Contact Sales</Card.Link>
                            
                      
                            <Card.Link href="#">News Room</Card.Link>
                          
                      
                            <Card.Link href="#">Career</Card.Link>
                            
                            
                            <Card.Link href="#">Security</Card.Link>
                        </ListGroup>
                   </Card.Body>
                 </Card>
                     </Col>

                     <Col md="2">
                     <Card className="border-0"style={{ width: '26rem' }}>
                   <Card.Body>
                     <Card.Title>
                        <h3>Solutions</h3>
                        </Card.Title>
                        <ListGroup>
                        
                        <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">Contact Sales</Card.Link>
                            
                      
                            <Card.Link href="#">News Room</Card.Link>
                          
                      
                            <Card.Link href="#">Career</Card.Link>
                            
                            
                            <Card.Link href="#">Security</Card.Link>
                        </ListGroup>
                   </Card.Body>
                 </Card>
                     </Col>

                     <Col md="2">
                     <Card className="border-0"style={{ width: '26rem' }}>
                   <Card.Body>
                     <Card.Title>
                        <h3>Popular Features</h3>
                        </Card.Title>
                        <ListGroup>
                       
                            <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">About Calendly</Card.Link>
                            
                       
                            <Card.Link href="#">Contact Sales</Card.Link>
                            
                      
                            <Card.Link href="#">News Room</Card.Link>
                          
                      
                            <Card.Link href="#">Career</Card.Link>
                            
                            
                            <Card.Link href="#">Security</Card.Link>
                           
                        </ListGroup>
                </Card.Body>
                 </Card>
                     </Col>
                
            
        
        </Row>
        <p style={{textAlign: "center"}}> &copy; Calendly Coding Practice 2023</p>
    </Container>
    
    
    </>
  )
  
}

export default Footer


    
    

  
        
           
      
       
       
    






