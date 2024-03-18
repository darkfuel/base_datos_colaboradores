import Table from 'react-bootstrap/Table'
import { BaseColaboradores } from '../assets/js/BaseColaboradores'
import { useState } from 'react'

function Listado ({ formData }) {
  // const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  console.log(formData, 'listado')
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Cargo</th>
        </tr>
      </thead>
      <tbody>
        {/* {colaboradores.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.edad}</td>
            <td>{item.correo}</td>
            <td>{item.telefono}</td>
            <td>{item.cargo}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  )
}

export default Listado
