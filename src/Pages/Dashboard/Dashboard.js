import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Tickettable from '../../Components/Ticket-table/Ticket-table';
import PageBreadcrumb from '../../Components/PageBreadCrumb/PageBreadcrumb';
import Faketickets from '../../assets/Data/Faketickets.json'
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <Container>

<Row>
      <Col className="text-center mt-2">
        
        <PageBreadcrumb page="Dashboard"/>
  
      </Col>
    </Row>
  
    <Row>
      <Col className="text-center mt-5 mb-2">
        <Link to="/add-ticket" >
        <Button
            variant="info"
            style={{ fontSize: "1.3rem", padding: "10px 30px", marginTop:"-20px"}}
          >
            Add New Ticket
          </Button>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col className="text-center  mb-2">
        <div>Total tickets: 122</div>
        <div>Pending tickets: 90</div>
      </Col>
    </Row>
    <Row>
      <Col className="mt-2">Recently Added tickets</Col>
    </Row>
    <hr />
    <Row>
      <Col className='recent-ticket'>
      <Tickettable tickets={Faketickets}/>
    </Col>
    </Row>
  </Container>
  )
}

export default Dashboard;

