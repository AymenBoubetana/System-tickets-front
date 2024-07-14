import React from 'react'
import {
  Form,
  Container,
  Col,
  Button,
  Row,
} from "react-bootstrap";
import { propTypes } from 'prop-types';
import './NewticketForm.css'
const NewTicketForm = ({ handleOnSubmit, handleOnChange,frmData }) => {
  console.log(frmData)
  return (
    <Container className="mt-3 mb-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className='mb-4'>
          <Form.Label column sm={3}>
            Sujet :
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={frmData.subject}
              name="subject"
              onChange={handleOnChange}
              maxLength="100"
              placeholder="Sujet"
              required
            />
            <Form.Text className="text-danger">
              
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-4'>
          <Form.Label column sm={3}>
            Date problème :
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={frmData.issueDate}
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-4'>
          <Form.Label column sm={3}>
            Fonction de destinateur :
          </Form.Label>
          <Col sm={6}>
            <Form.Select 
              value={frmData.senderFunction}
              name="senderFunction" 
              onChange={handleOnChange} 
              required
            >
              <option value="">Select Function</option>
              <option value="Directeur">Directeur</option>
              <option value="Directeur adjoint">Directeur adjoint</option>
              <option value="Departement info">Departement info</option>
              <option value="Departement finance">Departement finance</option>
              <option value="serveur">Autre</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-5'>
          <Form.Label column sm={3}>
            Type de l'appareil :
          </Form.Label>
          <Col sm={6}>
            <Form.Select 
              value={frmData.deviceType}
              name="deviceType" 
              onChange={handleOnChange} 
              required
            >
              <option value="">Select Appareil</option>
              <option value="imprimante">Imprimante</option>
              <option value="telephone Fixe">Téléphone Fixe</option>
              <option value="ordinateur">Ordinateur</option>
              <option value="serveur">Serveur</option>
              <option value="serveur">Autre</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message :</Form.Label>
          <Form.Control
            value={frmData.message}
            as="textarea"
            name="message"
            rows="5"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button type="submit" variant="info">
            Open Ticket
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default NewTicketForm;

// NewTicketForm.propTypes = {
//   handleOnSubmit:propTypes.func.isRequired
//   , 
//   handleOnChange :propTypes.func.isRequired
//   ,
//   frmData:propTypes.object.isRequired
// }
