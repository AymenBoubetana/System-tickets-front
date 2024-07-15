import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PageBreadcrumb from '../../Components/PageBreadCrumb/PageBreadcrumb'
import SearchForm from '../../Components/SearchForm/SearchForm'
import './ListeTicket.css'
import Tickettable from '../../Components/Ticket-table/Ticket-table'
import Faketickets from '../../assets/Data/Faketickets.json'
import { Link } from 'react-router-dom'


const ListeTicket = () => {

  const [str,setstr] = useState("")
  const [disp,setdisp] = useState(Faketickets)
  
  useEffect(()=>{},[str])

  const handleOnChange = (e)=>{
    setstr(e.target.value)
    handleFilter(e.target.value)
  }
  const handleFilter = sttr =>{
       const dispTicket = Faketickets.filter((row)=>
             row.subject.toLowerCase().includes(sttr.toLowerCase())
      );
      setdisp(dispTicket)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4" id='row_center_listes_ticket'>
        <Col>
          
            <Link to="/add-ticket">
            <Button variant="info" className='btn'>Add New Ticket</Button>
            
            </Link>
          
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Tickettable tickets={disp} />
        </Col>
      </Row>
    </Container>
  )
}

export default ListeTicket
