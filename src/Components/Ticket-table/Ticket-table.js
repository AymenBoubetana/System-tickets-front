import React from 'react'
import { Table } from "react-bootstrap";
const Tickettable = () => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Subjects</th>
        <th>Status</th>
        <th>Opened Date</th>
      </tr>
    </thead>
    <tbody>
      
          <tr >
            <td>01</td>
            <td>impremente</td>
            <td>en cours</td>
            <td>12-10-1014</td>
          </tr>
    
    </tbody>
  </Table>
  )
}

export default Tickettable