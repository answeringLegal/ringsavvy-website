import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../logo';
import { Link } from 'react-router';

const index = () => {
  return (
    <div className='navbar-bg-landing'>
      <Container className='landingContainer'>
        <div className='landing-logo'>
          <Logo />
        </div>
        <div>
          <Row>
            <Col xs={12} sm={12} lg={7}>
              <h1 className='landing-nav-heading'>
                Never Miss The <br />
                New Customer Again
              </h1>
              <br />
              <p className='landing-nav-details'>
                Whenever you can’t get to a call, our 24/7 virtual receptionist
                team will be there to pick up the phone and help secure you new
                business.
              </p>
              <br />
              <br />
              <button className='landing-nav-button'><Link to="/get-a-quote">GET A QUOTE</Link></button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default index;
