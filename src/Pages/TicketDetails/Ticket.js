import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '../../Components/PageBreadCrumb/PageBreadcrumb'
import Faketickets from '../../assets/Data/Faketickets.json'
import { MessageHistory } from '../../Components/MessageHistory/Messagehistory'
import UpdateTicket from '../../Components/UpdateTicket/UpdateTicket'

const Ticket = () => {
  const ticket = Faketickets[0];
  const [message, setMessage] = useState("");
  useEffect(()=>{},[message])

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
    
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row className='d-flex justify-content-between align-items-center mt-2'>
        <Col className='text-weight-bolder text-secondary'>
          <div className="subject">Sujet : {ticket.subject}</div>
          <div className="date">Date : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status}</div>
          <div className="fonction">Fonction : {ticket.fonction}</div>
          <div className="Appareil">Appareil : {ticket.Appareil}</div>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button variant="outline-info" style={{ width: '200px' }}>
            Fermer ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
        <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr/>
      <Row className='mt-4'>
        <Col>
        <UpdateTicket handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} message={message} />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket;
