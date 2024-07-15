import React from 'react'
import { Table } from "react-bootstrap";
import Faketickets from '../../assets/Data/Faketickets.json'
const Tickettable = ({tickets}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Subjects</th>
        <th>Status</th>
        <th>Opened Date</th>
        <th>Fonction</th>
        <th>Appareil</th>
      </tr>
    </thead>
    <tbody>
    {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
              {row.subject}
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt && new Date(row.addedAt).toLocaleString()}</td>
              <td>{row.fonction}</td>
              <td>{row.Appareil}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
    
    </tbody>
  </Table>
  )
}

export default Tickettable