import React from 'react'
import { Button, Form } from 'react-bootstrap'

const UpdateTicket = ({ handleOnSubmit, handleOnChange, message }) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label className='font-weight-bold h5'>Reply</Form.Label>
          <Form.Text className="d-block mb-2">
            Please reply your message here or update the ticket
          </Form.Text>
          <Form.Control
            value={message}
            onChange={handleOnChange}
            as="textarea"
            rows="5"
            name="detail"
          />
        </Form.Group>
        <div className="text-center mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default UpdateTicket
