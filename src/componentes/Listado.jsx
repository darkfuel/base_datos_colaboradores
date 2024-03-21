import Table from 'react-bootstrap/Table'
//filtra validando el valor de input 
let results = ({ formData, inputBusqueda }) => {
  if (!inputBusqueda) {
    results = formData
  } else {
    results = formData.filter((dato) =>
      dato.nombre.toLowerCase().includes(inputBusqueda.toLowerCase()))
  }

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
        {results && results.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.edad}</td>
            <td>{item.correo}</td>
            <td>{item.telefono}</td>
            <td>{item.cargo}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  )
}

export default results
