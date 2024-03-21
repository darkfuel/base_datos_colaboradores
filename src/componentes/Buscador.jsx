import { Form } from 'react-bootstrap'

const Buscador = ({ inputBusqueda, setInputBusqueda }) => {
// console.log(inputBusqueda)
  return <Form.Control type='text' placeholder='Buscar Colaborador' value={inputBusqueda} onChange={e => setInputBusqueda(e.target.value)} />
}
export default Buscador
