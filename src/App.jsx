import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listado from './componentes/Listado.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import Formulario from './componentes/Formulario.jsx'
import Buscador from './componentes/Buscador.jsx'

function App () {
  return (
    <>
      <Container>
        <Row>
          <h1>Lista de Colaboradores</h1>
          <Col><Buscador /></Col>
        </Row>
        <Row>
          <Col><Listado /></Col>
          <Col><Formulario /></Col>
        </Row>
      </Container>
    </>
  )
}

export default App
