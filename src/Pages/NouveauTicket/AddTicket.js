import {useState} from 'react'
import PageBreadcrumb from '../../Components/PageBreadCrumb/PageBreadcrumb'
import { Col, Container, Row } from 'react-bootstrap'
import NewTicketForm from '../../Components/NewTicketForm/NewTicketForm'

const initialState ={
  subject: '',
  issueDate: '',
  senderFunction: '',
  deviceType: '',
  message: '',
}
const AddTicket = () => {

  const [formState, setFormState] = useState(initialState)

  const handleOnChange = (e)=>{
      const {name,value} = e.target
      setFormState({
        ...formState,
        [name]:value
      })
  }

  const handlOnSubmit = e=>{
    e.preventDefault()
    console.log("form is submited")
  }

  return (
    <Container>
    <Row>
      <Col className='mt-5 mb-2'>
        <PageBreadcrumb page="New Ticket" />
      </Col>
    </Row>

    <Row>
      <Col>
        <NewTicketForm handleOnChange={handleOnChange} frmData={formState} handleOnSubmit={handlOnSubmit}/>
      </Col>
    </Row>
  </Container>
  )
}

export default AddTicket